import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, inject } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {

  changeDetectorRef = inject(ChangeDetectorRef);

  @Input() set score(value: number) {
    this._score = value;
    this.starClasses = Array.from({length: 5}, (_, idx) => [
      value >= idx + 1 ? 'yellow' :
      value > idx && value < idx + 1 ? 'half' : 'gray'
    ].filter(Boolean).join(' '));
    this.changeDetectorRef.detectChanges();
  }

  get score(): number {
    return this._score;
  }

  @Input() votes: number = 0;

  starClasses: string[] = Array.from({length: 5}, () => 'star');
  private _score: number = 0;
}
