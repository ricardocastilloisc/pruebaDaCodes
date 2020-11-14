import { Component, OnInit } from '@angular/core';
import { ServicesteamsService } from '../../services/servicesteams.service';
import { DataTeam, Team } from '../../intefaces/teams.interfaces';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {

  TeamModalData: Team;
  DataTeams: DataTeam;
  Loading: boolean = true;
  constructor(private _serviceTeams: ServicesteamsService, private modalService: NgbModal, private titleService: Title) {

    this.titleService.setTitle("Equipos");
  }

  ngOnInit(): void {
    this._serviceTeams.getTeams().subscribe((resp: DataTeam) => {
      this.DataTeams = resp;
      this.Loading = false;
    });
  }


  openModal(team:Team, modal)
  {
    this.TeamModalData = team;
    this.modalService.open(modal);
  }

}
