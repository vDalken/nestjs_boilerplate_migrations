import { Comment } from './src/items/entities/comment.entity';
import { Item } from './src/items/entities/item.entity';
import { Listing } from './src/items/entities/listing.entity';
import { Tag } from './src/items/entities/tag.entity';
import { DataSource } from 'typeorm';

export const DatabaseSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'nestjs_boilerplate',
  username: 'postgres',
  password: 'password',
  migrations: ['migrations/**'],
  entities: [Item, Listing, Comment, Tag],
  synchronize: false,
  migrationsTableName: 'migrations_table',
});
