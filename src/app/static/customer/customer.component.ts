import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';


export interface UsersData {
  name: string;
  country: string;
  address: string;
  bankdetail: string;
  id: number;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1560608769632, name: 'Artificial Intelligence', country:'india',address:'siruseri',bankdetail:'Indian bank'},
  {id: 1560608796014, name: 'Machine Learning',country:'pakistan',address:'siruseri',bankdetail:'Indian bank'},
  {id: 1560608787815, name: 'Robotic Process Automation',country:'india',address:'siruseri',bankdetail:'Indian bank'},
  {id: 1560608805101, name: 'Blockchain',country:'australia',address:'siruseri',bankdetail:'Indian bank'}
];


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {


  displayedColumns: string[] = ['id', 'name', 'country', 'address', 'bankdetail', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(public dialog: MatDialog) {}

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      name:row_obj.name,
      country:row_obj.country,
      address:row_obj.address,
      bankdetail:row_obj.bankdetail
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

}
