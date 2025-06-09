import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class Post extends Model {
    static table = 'posts';
    @text('title') title!: string;
    @text('body') body!: string;
    @field('is_pinned') isPinned!: boolean;
    @readonly @date('created_at') createdAt!: Date;
    @readonly @date('updated_at') updatedAt!: Date;
}
