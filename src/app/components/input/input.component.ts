import {Component, EventEmitter,Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }]
})
export class InputComponent implements ControlValueAccessor  {

    @Output() newItemEvent = new EventEmitter<string>();

    public password: string | undefined;

    private onChange: (value: string) => void;

    public onSetPassword(event:Event):void{
      const element = event.target as HTMLInputElement
      const value = element.value
      this.writeValue(value)
      this.onChange(value)
      this.newItemEvent.emit(value);
    }

    public writeValue(value: string): void {
      this.password = value;
      
  }

    public registerOnChange(onChange: (value: string) => void): void {
        this.onChange = onChange;
  }

    public registerOnTouched(onTouched: () => void): void {
  }

  }
