import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from './../services/database.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  Data: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private db: DatabaseService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.db.getDatabaseState().subscribe((res) => {
      if(res){
        this.db.getStudents().subscribe(item => {
          this.Data = item
        })
      }
    }); 
  }
    

}
