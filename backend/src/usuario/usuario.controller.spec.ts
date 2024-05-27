import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

describe('UsuarioController', () => {
  let app;

  const usuario = {
    nome: 'joey joe',
    email: 'novo@usuario2.com',
    senha: 'senha123',
    cpf: '12345678904',
    telefone: '21976408231',
    endereco: [{
      rua: 'Rua borda do mato',
      numero: '100',
      pais: 'Brasil',
      bairro: 'grajau',
      cidade: 'rio',
      complemento: 'casa3',
      estado: 'Rio de Janeiro',
      cep: '20775170'
    }]
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    useContainer(app.select(AppModule), { fallbackOnErrors: true });

    await app.init();
  });

  it('deve inserir um novo usuário', async () => {

    const response = await request(app.getHttpServer())
      .post('/usuario')
      .send(usuario);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.nome).toBe(usuario.nome);
    expect(response.body.email).toBe(usuario.email);
  });

  it('deve listar todos os usuários', async () => {
    const response = await request(app.getHttpServer())
      .get('/usuario');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('deve não adicionar um usuário com email já existente', async () => {
    const response = await request(app.getHttpServer())
      .post('/usuario')
      .send(usuario);

    expect(response.status).toBe(400);
    expect(response.body.message).toContain("Já existe um usuário com este e-mail");
  });

  it('deve não adicionar um usuário com email inválido', async () => {

    const emailInvalido = {
        nome: 'joey joe',
        email: 'novo@usuario2.com',
        senha: 'senha123',
        cpf: '12345678904',
        telefone: '21976408231',
        endereco: [{
          rua: 'Rua borda do mato',
          numero: '100',
          pais: 'Brasil',
          bairro: 'grajau',
          cidade: 'rio',
          complemento: 'casa3',
          estado: 'Rio de Janeiro',
          cep: '20775170'
        }]
    };
    const response = await request(app.getHttpServer())
      .post('/usuario')
      .send(emailInvalido);

    expect(response.status).toBe(400);
    expect(response.body.message).toContain("O e-mail informado é inválido");
  });

  afterAll(async () => {
    await app.close();
  });
});