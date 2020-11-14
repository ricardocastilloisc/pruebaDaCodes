import { Component, OnInit } from '@angular/core';
import { ServicesteamsService } from '../../services/servicesteams.service';
import { DataTeam } from '../../intefaces/teams.interfaces';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  DataTeams: DataTeam;
  Loading: boolean = true;
  constructor(private _serviceTeams: ServicesteamsService) {}

  ngOnInit(): void {
    this._serviceTeams.getTeams().subscribe((resp: DataTeam) => {
      this.DataTeams = resp;
      this.Loading = false;
    });
  }
}
