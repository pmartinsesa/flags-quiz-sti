export class Student {
  private consectiveRightQuestions: number;
  private consectiveVeryWrongQuestions: number;

  constructor() {
    this.consectiveRightQuestions = 0;
    this.consectiveVeryWrongQuestions = 0;
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

  public getConsectiveVeryWrongQuestions(): number {
    return this.consectiveVeryWrongQuestions;
  }

  public incrementConsectiveVeryWrongQuestions(): void {
    ++this.consectiveVeryWrongQuestions;
  }

  public resetConsectiveVeryWrongQuestions(): void {
    this.consectiveVeryWrongQuestions = 0;
  }
}