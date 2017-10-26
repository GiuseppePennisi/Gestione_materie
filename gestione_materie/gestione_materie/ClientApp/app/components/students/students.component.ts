import { Component, OnInit, Inject } from '@angular/core';
import { Student } from './student';

import { Router } from '@angular/router';
import { Http } from "@angular/http";

@Component({
    selector: 'students',
    templateUrl: './students.component.html'
})
export class StudentComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    students: Student[];
    selectedStudent: Student;

    onSelect(student: Student): void {
        this.selectedStudent = student;
    }

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/students').subscribe(result => {
            this.students = result.json() as Student[];
        }, error => console.error(error));
    }
    gotoDetail(): void {
        /*   this.router.navigate(['/detail', this.selectedStudent.id]);*/
    }

}