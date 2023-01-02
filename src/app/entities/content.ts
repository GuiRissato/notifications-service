export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLenght(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLenghtvalid = this.validateContentLenght(content);
    if (!isContentLenghtvalid) {
      throw new Error('Content length error');
    }
    this.content = content;
  }
}
