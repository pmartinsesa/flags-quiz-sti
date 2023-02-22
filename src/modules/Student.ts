export class Student {
  private consectiveRightQuestions: number;

  constructor() {
    this.consectiveRightQuestions = 0;
  }

  public getConsectiveRightQuestions(): number {
    return this.consectiveRightQuestions;
  }

  public incrementConsectiveRightQuestions(): void {
    ++this.consectiveRightQuestions;
  }

  public resetConsectiveRightQuestions(): void {
    this.consectiveRightQuestions = 0;
  }
}