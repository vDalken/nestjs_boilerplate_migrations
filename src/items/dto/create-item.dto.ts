import { CreateTagDto } from './create-tag.dto';

export class CreateItemDto {
  name: string;
  public: boolean;
  listing: CreateItemDto;
  tags: CreateTagDto[];
}
