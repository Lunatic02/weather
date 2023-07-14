export interface dataProps {
  data: {
    location: {
      name: string,
      region: string,
      country: string,
      localtime: string
    }
    current: {
      temp_c: number
      is_day: boolean
      uv: number
      wind_dir: string
      wind_kph: number
      humidity: number, 
      vis_km: number
      condition: {
        text: string
        icon: string
        wind_kph: number,
        humidity: number,
        precip_mm: number,
        cloud: number
      }
      air_quality: {
        us_epa_index: number,
      }
    }
    forecast: {
      forecastday: {
        
        0: {
          astro: {
            sunrise: number
            sunset: number
          },
          day: {
            maxtemp_c: number,
            mintemp_c: number,
            condition: {
              text: string,
              icon: string
            }
          }
          hour: {
            0: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            1: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            2: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            3: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            4: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            5: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            6: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            7: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            8: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            9: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            10: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            11: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            12: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            13: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            14: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            15: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            16: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            17: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            18: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            19: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            20: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            21: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            22: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
            23: {
              temp_c: number,
              is_day: boolean,
              condition: {
                text: string,
                icon: string
              }
            }
          }
        }

      }

    }
  }
}
