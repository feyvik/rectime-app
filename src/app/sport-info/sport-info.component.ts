import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport-info',
  templateUrl: './sport-info.component.html',
  styleUrls: ['./sport-info.component.scss'],
})
export class SportInfoComponent implements OnInit {
  public availableSports = [
    { text: '0-8', selected: false },
    { text: '9-15', selected: false },
    { text: '16-24', selected: false },
    { text: '25+', selected: false },
  ];

  public preferredGameType = [
    { text: 'Stroke Play', selected: false },
    { text: 'Match Play', selected: false },
    { text: 'StableFord', selected: false },
  ];

  public dominantHand = [
    { text: 'Left', selected: false },
    { text: 'Right', selected: false },
  ];

  constructor() {}

  ngOnInit() {}

  pinFormatter(value: number) {
    const val = (value / 10).toFixed(1);
    return val.endsWith('.0') ? val.replace('.0', '') : val;
  }

  toggleSelected(index: number, type: string) {
    if (type === 'availableSports') {
      const updatedAvailableSports = [...this.availableSports];
      updatedAvailableSports[index].selected =
        !updatedAvailableSports[index].selected;
      this.availableSports = [...updatedAvailableSports];
    } else if (type === 'preferredGameType') {
      const updatedPreferredGameType = [...this.preferredGameType];
      updatedPreferredGameType[index].selected =
        !updatedPreferredGameType[index].selected;
      this.preferredGameType = [...updatedPreferredGameType];
    } else if (type === 'dominantHand') {
      const updatedDominantHand = [...this.dominantHand];
      updatedDominantHand[index].selected =
        !updatedDominantHand[index].selected;
      this.dominantHand = [...updatedDominantHand];
    }
  }
}
