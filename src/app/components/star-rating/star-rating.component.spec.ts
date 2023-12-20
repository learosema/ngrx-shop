import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingComponent } from './star-rating.component';

describe('StarRatingComponent', () => {
  let component: StarRatingComponent;
  let fixture: ComponentFixture<StarRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a stars container', () => {
    const starsContainer = fixture.nativeElement.querySelector('.stars');
    expect(starsContainer).toBeTruthy();
  })

  it('should render 5 yellow stars when the score is 5', () => {
    component.score = 5;
    fixture.detectChanges();
    component.changeDetectorRef.detectChanges();

    const starsContainer = fixture.nativeElement.querySelector('.stars');
    const yellowStars = starsContainer.querySelectorAll('.yellow');
    expect(yellowStars.length).toBe(5);
  });

  it('should render 5 gray stars when the score is 0', () => {
    component.score = 0;
    fixture.detectChanges();
    component.changeDetectorRef.detectChanges();

    const starsContainer = fixture.nativeElement.querySelector('.stars');
    const grayStars = starsContainer.querySelectorAll('.gray');
    expect(grayStars.length).toBe(5);
  });

  it('should render 3 yellow stars, 1 half star and 1 gray star when the score is 3.5', () => {
    component.score = 3.5;
    fixture.detectChanges();
    component.changeDetectorRef.detectChanges();

    const starsContainer = fixture.nativeElement.querySelector('.stars');
    const yellowStars = starsContainer.querySelectorAll('.yellow');
    expect(yellowStars.length).toBe(3);
    const halfStars = starsContainer.querySelectorAll('.half');
    expect(halfStars.length).toBe(1);
    const grayStars = starsContainer.querySelectorAll('.gray');
    expect(grayStars.length).toBe(1);
  });

});
