import { Component, OnInit, Input } from '@angular/core';
import { ITaskWriteRequest } from '../../../model/task.interface';
import { SharedService } from '../../../service/shared.service';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-task-write',
  templateUrl: './task-write.component.html',
  styleUrls: ['./task-write.component.css']
})
export class TaskWriteComponent implements OnInit {

  constructor(private SharedService: SharedService, private TaskService: TaskService) { }

  ngOnInit() { }

  private write() {
    this.TaskService.write(this.formData).subscribe(
      task => {

      }
    );
  }

  private formData: ITaskWriteRequest = {
    category: null,
    writer: null,
    title: null,
    content: null
  };

  @Input() tasks: ITask[];
}
