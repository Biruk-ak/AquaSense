/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Core seed data
 * @copyright Biruk-ak
 */

export const seedDistricts = [
  {
    "code": "CENT00",
    "displayName": "Central District",
    "populationServed": 5000,
    "active": true,
    "pressureZone": "PZ-1"
  },
  {
    "code": "NORT01",
    "displayName": "North District",
    "populationServed": 6200,
    "active": true,
    "pressureZone": "PZ-2"
  },
  {
    "code": "SOUT02",
    "displayName": "South District",
    "populationServed": 7400,
    "active": true,
    "pressureZone": "PZ-3"
  },
  {
    "code": "EAST03",
    "displayName": "East District",
    "populationServed": 8600,
    "active": true,
    "pressureZone": "PZ-4"
  },
  {
    "code": "WEST04",
    "displayName": "West District",
    "populationServed": 9800,
    "active": true,
    "pressureZone": "PZ-5"
  },
  {
    "code": "HARB05",
    "displayName": "Harbor District",
    "populationServed": 11000,
    "active": true,
    "pressureZone": "PZ-6"
  },
  {
    "code": "HIGH06",
    "displayName": "Highland District",
    "populationServed": 12200,
    "active": true,
    "pressureZone": "PZ-7"
  },
  {
    "code": "VALL07",
    "displayName": "Valley District",
    "populationServed": 13400,
    "active": true,
    "pressureZone": "PZ-8"
  },
  {
    "code": "RIVE08",
    "displayName": "Riverside District",
    "populationServed": 14600,
    "active": true,
    "pressureZone": "PZ-9"
  },
  {
    "code": "LAKE09",
    "displayName": "Lakeside District",
    "populationServed": 15800,
    "active": true,
    "pressureZone": "PZ-10"
  },
  {
    "code": "INDU10",
    "displayName": "Industrial District",
    "populationServed": 17000,
    "active": true,
    "pressureZone": "PZ-11"
  },
  {
    "code": "RESI11",
    "displayName": "Residential District",
    "populationServed": 18200,
    "active": true,
    "pressureZone": "PZ-12"
  },
  {
    "code": "COMM12",
    "displayName": "Commercial District",
    "populationServed": 19400,
    "active": true,
    "pressureZone": "PZ-13"
  },
  {
    "code": "SUBU13",
    "displayName": "Suburban District",
    "populationServed": 20600,
    "active": true,
    "pressureZone": "PZ-14"
  },
  {
    "code": "DOWN14",
    "displayName": "Downtown District",
    "populationServed": 21800,
    "active": true,
    "pressureZone": "PZ-15"
  },
  {
    "code": "UPTO15",
    "displayName": "Uptown District",
    "populationServed": 23000,
    "active": true,
    "pressureZone": "PZ-16"
  },
  {
    "code": "MIDT16",
    "displayName": "Midtown District",
    "populationServed": 24200,
    "active": true,
    "pressureZone": "PZ-17"
  },
  {
    "code": "COAS17",
    "displayName": "Coastal District",
    "populationServed": 25400,
    "active": true,
    "pressureZone": "PZ-18"
  },
  {
    "code": "INLA18",
    "displayName": "Inland District",
    "populationServed": 26600,
    "active": true,
    "pressureZone": "PZ-19"
  },
  {
    "code": "FRON19",
    "displayName": "Frontier District",
    "populationServed": 27800,
    "active": true,
    "pressureZone": "PZ-20"
  }
] as const;

export const seedTariffs = [
  {
    "code": "LIFELINE",
    "name": "Lifeline Tariff",
    "baseCharge": 5,
    "tiers": [
      {
        "upTo": 10,
        "rate": 1.0
      },
      {
        "upTo": 30,
        "rate": 2.0
      },
      {
        "upTo": 9999,
        "rate": 3.0
      }
    ]
  },
  {
    "code": "STANDARD",
    "name": "Standard Tariff",
    "baseCharge": 6,
    "tiers": [
      {
        "upTo": 10,
        "rate": 1.2
      },
      {
        "upTo": 30,
        "rate": 2.2
      },
      {
        "upTo": 9999,
        "rate": 3.25
      }
    ]
  },
  {
    "code": "HIGHUSE",
    "name": "HighUse Tariff",
    "baseCharge": 7,
    "tiers": [
      {
        "upTo": 10,
        "rate": 1.4
      },
      {
        "upTo": 30,
        "rate": 2.4
      },
      {
        "upTo": 9999,
        "rate": 3.5
      }
    ]
  },
  {
    "code": "COMMERCIAL",
    "name": "Commercial Tariff",
    "baseCharge": 8,
    "tiers": [
      {
        "upTo": 10,
        "rate": 1.6
      },
      {
        "upTo": 30,
        "rate": 2.6
      },
      {
        "upTo": 9999,
        "rate": 3.75
      }
    ]
  },
  {
    "code": "INDUSTRIAL",
    "name": "Industrial Tariff",
    "baseCharge": 9,
    "tiers": [
      {
        "upTo": 10,
        "rate": 1.8
      },
      {
        "upTo": 30,
        "rate": 2.8
      },
      {
        "upTo": 9999,
        "rate": 4.0
      }
    ]
  },
  {
    "code": "AGRICULTURAL",
    "name": "Agricultural Tariff",
    "baseCharge": 10,
    "tiers": [
      {
        "upTo": 10,
        "rate": 2.0
      },
      {
        "upTo": 30,
        "rate": 3.0
      },
      {
        "upTo": 9999,
        "rate": 4.25
      }
    ]
  }
] as const;
