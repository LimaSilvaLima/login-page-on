import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-login-layout.html',
  styleUrl: './default-login-layout.scss',
})
export class DefaultLoginLayout {
    @Input() title: string = '';
    @Input() primaryBtnText: string = '';
    @Input() secondaryBtnText: string = '';
    @Output("submit") onSubmit = new EventEmitter<void>();
    @Output("navigate") onNavigate = new EventEmitter<void>();

    submit() {
        this.onSubmit.emit();
    }

    navigate() {
        this.onNavigate.emit();
    } 
}
