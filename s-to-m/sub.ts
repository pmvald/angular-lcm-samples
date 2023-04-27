import {Component, Input, NgModule, Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class SubService {
  getMessage(): string {
    return 'Hello Angular';
  }
}
