import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule, FormsModule],
  templateUrl: './task.html',
  styleUrls: ['./task.scss']
})
export class Task {

  searchText = '';

  tasks = [
    { id: 'T1234', name: 'Pintu Pal', gender: 'M', mobile: '+91 932*******', whatsapp: '+91 932*******', email: 'pin***@gmail.com', language: 'English', time: '10:00 AM IST', status: 'Completed' },
    { id: 'T1235', name: 'Mallika Chawla', gender: 'F', mobile: '+91 704*******', whatsapp: '+91 704*******', email: 'sim***@yahoo.com', language: 'English', time: '02:00 PM IST', status: 'Pending' },
    { id: 'T1232', name: 'Swapni Dhule', gender: 'M', mobile: '+91 984*******', whatsapp: '+91 984*******', email: 'swa***@gmail.com', language: 'English', time: '10:00 AM IST', status: 'WIP' },
    { id: 'T1236', name: 'Pintu Pal', gender: 'M', mobile: '+91 932*******', whatsapp: '+91 932*******', email: 'pin***@gmail.com', language: 'English', time: '10:00 AM IST', status: 'Rescheduled' },
     { id: 'T1235', name: 'Mallika Chawla', gender: 'F', mobile: '+91 704*******', whatsapp: '+91 704*******', email: 'sim***@yahoo.com', language: 'English', time: '02:00 PM IST', status: 'Pending' },
    { id: 'T1232', name: 'Swapni Dhule', gender: 'M', mobile: '+91 984*******', whatsapp: '+91 984*******', email: 'swa***@gmail.com', language: 'English', time: '10:00 AM IST', status: 'WIP' },
    { id: 'T1236', name: 'Pintu Pal', gender: 'M', mobile: '+91 932*******', whatsapp: '+91 932*******', email: 'pin***@gmail.com', language: 'English', time: '10:00 AM IST', status: 'Rescheduled' }
  ];

  
  getStatusCounts() {
    return {
      Completed: this.tasks.filter(t => t.status === 'Completed').length,
      Pending: this.tasks.filter(t => t.status === 'Pending').length,
      WIP: this.tasks.filter(t => t.status === 'WIP').length,
      Rescheduled: this.tasks.filter(t => t.status === 'Rescheduled').length,
    };
  }

  
  get donutChartOptions() {
    const counts = this.getStatusCounts();
    return {
      tooltip: { trigger: 'item' },
      legend: { bottom: '0%' },
      series: [
        {
          name: 'Task Status',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: { show: true, formatter: '{d}%' },
          data: [
            { value: counts.Completed, name: 'Completed' },
            { value: counts.WIP, name: 'WIP' },
            { value: counts.Pending, name: 'Pending' },
            { value: counts.Rescheduled, name: 'Rescheduled' }
          ]
        }
      ]
    };
  }

  
  get statusChartOptions() {
    const counts = this.getStatusCounts();
    return {
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
      xAxis: { type: 'category', data: Object.keys(counts) },
      yAxis: { type: 'value' },
      series: [
        {
          type: 'bar',
          data: Object.values(counts),
          itemStyle: { color: '#4f46e5' },
        }
      ]
    };
  }

  filteredTasks() {
    return this.tasks.filter(task =>
      JSON.stringify(task).toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
