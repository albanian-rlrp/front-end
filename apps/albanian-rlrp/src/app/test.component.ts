import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MultiSelectModule, AsyncPipe],
})
export class TestComponent {
  private readonly httpClient = inject(HttpClient);

  options$ = this.httpClient.get<Array<any>>(
    'https://jsonplaceholder.typicode.com/posts',
  );
}
