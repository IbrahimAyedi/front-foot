import { Component } from '@angular/core';

interface Team {
  name: string;
  logo: string;
}

interface Match {
  team1: Team;
  team2: Team;
  score: string;
  time: string;
  status: {
    date: string;
    icon1: string;
    icon2: string;
  };
}

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.scss']
})
export class TableauDeBordComponent {
  time = '62 : 24';
  scoreTeam1 = '1';
  scoreTeam2 = '0';
  team1Logo = '../../assets/image/afa.png';
  team2Logo = '../../assets/image/cbf.png';

  stats = [
    { name: 'Attaques', team1: 8, team2: 8 },
    { name: 'Attaques dangereuses', team1: 4, team2: 3 },
    { name: 'Possession', team1: 7, team2: 3 }
  ];

  matches: Match[] = [];

  ngOnInit() {
    this.matches = [
      {
        team1: { name: 'Argentina', logo: '../../assets/image/Argentina.png' },
        team2: { name: 'Italy', logo: '../../assets/image/Italy.png' },
        score: '1 - 2',
        time: 'Full - Time',
        status: {
          date: '18 December 2023',
          icon1: './assets/icon-pe2.png',
          icon2: './assets/icon-QNS.png'
        }
      },
      {
        team1: { name: 'Portugal', logo: '../../assets/image/Portugal.png' },
        team2: { name: 'Belgium', logo: '../../assets/image/Belgium.png' },
        score: '2 - 3',
        time: 'Full - Time',
        status: {
          date: '19 December 2022',
          icon1: './assets/icon-xfQ.png',
          icon2: './assets/icon-WR4.png'
        }
      },
      {
        team1: { name: 'Ghana', logo: '../../assets/image/Ghana.png' },
        team2: { name: 'Brazil', logo: '../../assets/image/Brazil.png' },
        score: '1 - 2',
        time: 'Full - Time',
        status: {
          date: '18 December 2023',
          icon1: './assets/icon-pe2.png',
          icon2: './assets/icon-QNS.png'
        }
      },
      {
        team1: { name: 'Uruguay', logo: '../../assets/image/Uruguay.png' },
        team2: { name: 'Poland', logo: '../../assets/image/Poland.png' },
        score: '1 - 2',
        time: 'Full - Time',
        status: {
          date: '18 December 2023',
          icon1: './assets/icon-pe2.png',
          icon2: './assets/icon-QNS.png'
        }
      },
      {
        team1: { name: 'spain', logo: '../../assets/image/Spanish.png' },
        team2: { name: 'Czech', logo: '../../assets/image/Czech.png' },
        score: '1 - 2',
        time: 'Full - Time',
        status: {
          date: '18 December 2023',
          icon1: './assets/icon-pe2.png',
          icon2: './assets/icon-QNS.png'
        }
      },
      {
        team1: { name: 'France', logo: '../../assets/image/France.png' },
        team2: { name: 'Germany', logo: '../../assets/image/Germany.png' },
        score: '1 - 4',
        time: 'Full - Time',
        status: {
          date: '18 December 2023',
          icon1: './assets/icon-pe2.png',
          icon2: './assets/icon-QNS.png'
        }
      },
      {
        team1: { name: 'tunisie', logo: '../../assets/image/tn-1.png' },
        team2: { name: 'algerie', logo: '../../assets/image/alg-1.png' },
        score: '2 - 2',
        time: 'Full - Time',
        status: {
          date: '18 December 2023',
          icon1: './assets/icon-pe2.png',
          icon2: './assets/icon-QNS.png'
        }
      },
    ];
  }

}
