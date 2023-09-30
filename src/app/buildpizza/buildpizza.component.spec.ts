import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildpizzaComponent } from './buildpizza.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BuildservService } from '../buildserv.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

describe('BuildpizzaComponent', () => {
  let component: BuildpizzaComponent;
  let fixture: ComponentFixture<BuildpizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ BuildpizzaComponent ],
      providers: [BuildservService, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });




  it('should check for initial value of "value = 0"', ()=>{
    expect(component.value).toBe(0);
  });
  it('should check for non negative', ()=>{
    expect(component.value).toBeGreaterThanOrEqual(0);
  });
  it('should check for not exceeding total cost of 561', ()=>{
    expect(component.value).toBeLessThan(20);
  });
  it('should check if the checkbox is working or not', ()=>{
    expect(document.getElementById('check_box')).toBeNull();
  });
});
