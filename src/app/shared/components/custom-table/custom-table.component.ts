import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent implements OnInit {
  @Input() columns: any[] = [];

  @Input() data: any[] = [];

  @Input() totalRecords: any;

  @Output() pageEvent: EventEmitter<number> = new EventEmitter<number>();

  first = 0;

  @ContentChild('bodyTemplate', { read: TemplateRef }) bodyTemplate:
    | TemplateRef<any>
    | undefined;

  constructor() {}

  ngOnInit(): void {}

  onLazyLoad(e: LazyLoadEvent) {
    let page = 0;
    let offset = e.first;

    if (offset !== undefined) {
      let offsetPage = offset.toString();

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
}
