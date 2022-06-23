import { container } from 'tsyringe';
import '@shared/container/providers';


container.registerSingleton<INTERFACE>(
  'NameDoRepositorio',
  Repositorio
);
