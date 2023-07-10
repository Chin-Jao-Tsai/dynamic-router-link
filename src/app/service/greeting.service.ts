// greeting.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  public getGreeting(): string {
    return 'Hello, Angular!';
  }

  public calc(a, b) {
    return a + b;
  }
}