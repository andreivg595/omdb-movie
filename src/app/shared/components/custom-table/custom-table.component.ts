import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent {
  @Input() columns: any[] = [];

  @Input() data: any[] = [];

  @Input() totalRecords = 0;

  @Output() pageEvent: EventEmitter<number> = new EventEmitter<number>();

  @Output() selectedRowEvent: EventEmitter<any> = new EventEmitter<any>();

  @Output() unselectedRowEvent: EventEmitter<any> = new EventEmitter<any>();

  first = 0;

  selectedRow: any;

  @ContentChild('bodyTemplate', { read: TemplateRef }) bodyTemplate:
    | TemplateRef<any>
    | undefined;

  onLazyLoad(e: LazyLoadEvent): void {
    let page = 0;
    const offset = e.first;

    if (offset !== undefined) {
      const offsetPage = offset.toString();

      switch (offsetPage.length) {
        case 1: {
          page = Number(offsetPage.charAt(0)) + 1;
          break;
        }
        case 2: {
          page = Number(offsetPage.charAt(0)) + 1;
          break;
        }
        case 3: {
          page = Number(offsetPage.substring(0, 2)) + 1;
          break;
        }
        default: {
          break;
        }
      }
    }

    this.pageEvent.emit(page);
  }

  onRowSelect(e: any): void {
    this.selectedRowEvent.emit(e.data);
  }

  onRowUnselect(e: any): void {
    this.unselectedRowEvent.emit(e.data);
  }
}
