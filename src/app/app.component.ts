import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Weather-App';
  cityName: string = 'tbilisi';
  weatherData?: WeatherData;

  constructor(private _service: WeatherService) {}

  ngOnInit(): void {
    this.getWeather(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeather(this.cityName);
    this.cityName = '';
  }

  private getWeather(cityName: string) {
    this._service.getWeatherData(cityName).subscribe({
      next: (res) => {
        this.weatherData = res;
      },
    });
  }
}
