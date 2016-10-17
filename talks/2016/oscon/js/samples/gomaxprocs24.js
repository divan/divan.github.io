(function() {

 var data = [
  {
    "t": 31083,
    "command": "create goroutine",
    "name": "#1"
  },
  {
    "t": 31083,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 104810,
    "command": "create goroutine",
    "name": "#6",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 124613,
    "command": "unblock goroutine",
    "name": "#5"
  },
  {
    "t": 138568,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 166727,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 173829,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 175055,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 175640,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 186447,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 186865,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 187839,
    "command": "send to channel",
    "from": "#1",
    "to": "#20",
    "ch": "#4",
    "value": "0",
    "duration": 173190
  },
  {
    "t": 188341,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 188591,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 233713,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 235078,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 235830,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 239562,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 254993,
    "command": "create goroutine",
    "name": "#17",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 259477,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 260118,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 262680,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 263209,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 263627,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 265382,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 275047,
    "command": "block goroutine",
    "name": "#5"
  },
  {
    "t": 280812,
    "command": "create goroutine",
    "name": "#18",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 284350,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 285714,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 288416,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 289837,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 290784,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 293569,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 295574,
    "command": "create goroutine",
    "name": "#19",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 298833,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 300421,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 304042,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 304961,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 305991,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 308916,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 311033,
    "command": "create goroutine",
    "name": "#20",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 314152,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 315016,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 317300,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 319806,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 320670,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 322619,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 324736,
    "command": "create goroutine",
    "name": "#21",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 326825,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 327577,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 329722,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 330613,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 331560,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 334763,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 336574,
    "command": "create goroutine",
    "name": "#22",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 339303,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 340919,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 344066,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 344874,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 345682,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 347436,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 348857,
    "command": "create goroutine",
    "name": "#23",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 351029,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 351921,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 354038,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 356210,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 357101,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 358856,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 359107,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 359915,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 360722,
    "command": "create goroutine",
    "name": "#24",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 363034,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 363396,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 365513,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 365931,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 366237,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 367853,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 387043,
    "command": "block goroutine",
    "name": "#18"
  },
  {
    "t": 392391,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 393784,
    "command": "block goroutine",
    "name": "#17"
  },
  {
    "t": 395956,
    "command": "create goroutine",
    "name": "#25",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 397878,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 399438,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 399772,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 400023,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 400663,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 402947,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 403170,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 403560,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 404033,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 404368,
    "command": "block goroutine",
    "name": "#19"
  },
  {
    "t": 405955,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 409493,
    "command": "unblock goroutine",
    "name": "#24"
  },
  {
    "t": 410662,
    "command": "block goroutine",
    "name": "#24"
  },
  {
    "t": 413058,
    "command": "unblock goroutine",
    "name": "#25"
  },
  {
    "t": 414506,
    "command": "block goroutine",
    "name": "#25"
  },
  {
    "t": 417347,
    "command": "create goroutine",
    "name": "#26",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 417681,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 419882,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 420327,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 422389,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 422778,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 423085,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 424700,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 426065,
    "command": "create goroutine",
    "name": "#27",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 428071,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 428265,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 428683,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 430856,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 431274,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 431580,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 433251,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 434059,
    "command": "create goroutine",
    "name": "#28",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 435814,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 436148,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 438320,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 438905,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 439267,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 439741,
    "command": "unblock goroutine",
    "name": "#27"
  },
  {
    "t": 440966,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 441579,
    "command": "block goroutine",
    "name": "#27"
  },
  {
    "t": 441969,
    "command": "create goroutine",
    "name": "#29",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 444002,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 444504,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 446732,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 447317,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 448041,
    "command": "unblock goroutine",
    "name": "#28"
  },
  {
    "t": 448710,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 449267,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 451161,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 452581,
    "command": "unblock goroutine",
    "name": "#29"
  },
  {
    "t": 453277,
    "command": "create goroutine",
    "name": "#30",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 453807,
    "command": "block goroutine",
    "name": "#28"
  },
  {
    "t": 456035,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 456480,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 458486,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 458848,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 459154,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 460853,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 462190,
    "command": "create goroutine",
    "name": "#31",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 462497,
    "command": "unblock goroutine",
    "name": "#30"
  },
  {
    "t": 464446,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 464641,
    "command": "block goroutine",
    "name": "#29"
  },
  {
    "t": 464976,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 467510,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 467844,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 468151,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 469766,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 470685,
    "command": "create goroutine",
    "name": "#32",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 472162,
    "command": "unblock goroutine",
    "name": "#31"
  },
  {
    "t": 472802,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 473721,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 474000,
    "command": "block goroutine",
    "name": "#31"
  },
  {
    "t": 475866,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 476284,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 476730,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 478429,
    "command": "unblock goroutine",
    "name": "#32"
  },
  {
    "t": 478707,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 479069,
    "command": "block goroutine",
    "name": "#30"
  },
  {
    "t": 480685,
    "command": "create goroutine",
    "name": "#33",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 482523,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 482829,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 484863,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 485225,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 485670,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 486729,
    "command": "unblock goroutine",
    "name": "#33"
  },
  {
    "t": 487397,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 488372,
    "command": "create goroutine",
    "name": "#34",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 488623,
    "command": "block goroutine",
    "name": "#33"
  },
  {
    "t": 490489,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 491018,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 493079,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 493441,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 493748,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 495447,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 495753,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 496644,
    "command": "create goroutine",
    "name": "#35",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 497508,
    "command": "block goroutine",
    "name": "#34"
  },
  {
    "t": 498622,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 498900,
    "command": "unblock goroutine",
    "name": "#26"
  },
  {
    "t": 499235,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 501351,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 501714,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 501964,
    "command": "block goroutine",
    "name": "#32"
  },
  {
    "t": 502243,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 504360,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 504666,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 505390,
    "command": "create goroutine",
    "name": "#36",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 506254,
    "command": "block goroutine",
    "name": "#35"
  },
  {
    "t": 507730,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 508398,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 509596,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 511072,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 511434,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 511713,
    "command": "block goroutine",
    "name": "#36"
  },
  {
    "t": 511991,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 513607,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 514916,
    "command": "create goroutine",
    "name": "#37",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 516782,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 517562,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 520013,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 520264,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 520542,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 520988,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 521740,
    "command": "block goroutine",
    "name": "#37"
  },
  {
    "t": 522715,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 539148,
    "command": "block goroutine",
    "name": "#26"
  },
  {
    "t": 541877,
    "command": "create goroutine",
    "name": "#38",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 544523,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 545164,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 548089,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 548451,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 548701,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 549063,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 550846,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 552016,
    "command": "create goroutine",
    "name": "#39",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 554021,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 554578,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 556222,
    "command": "unblock goroutine",
    "name": "#39"
  },
  {
    "t": 556946,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 557447,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 557809,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 558060,
    "command": "block goroutine",
    "name": "#39"
  },
  {
    "t": 559703,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 560984,
    "command": "create goroutine",
    "name": "#40",
    "parent": "#6",
    "depth": 2
  },
  {
    "t": 562711,
    "command": "stop goroutine",
    "name": "#6"
  },
  {
    "t": 564048,
    "command": "unblock goroutine",
    "name": "#40"
  },
  {
    "t": 578142,
    "command": "block goroutine",
    "name": "#40"
  },
  {
    "t": 608028,
    "command": "block goroutine",
    "name": "#38"
  },
  {
    "t": 672675,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 675516,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 676351,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 680056,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 711167,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 775897,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 777011,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 781245,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 784170,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 785785,
    "command": "send to channel",
    "from": "#1",
    "to": "#18",
    "ch": "#4",
    "value": "1",
    "duration": 16684
  },
  {
    "t": 794057,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 794809,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 797483,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 799656,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 801411,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 863328,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 863773,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 867255,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 869427,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 870291,
    "command": "send to channel",
    "from": "#1",
    "to": "#17",
    "ch": "#4",
    "value": "2",
    "duration": 24677
  },
  {
    "t": 875889,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 876725,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 879371,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 881042,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 893826,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 946942,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 947360,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 948000,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 949978,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 950619,
    "command": "send to channel",
    "from": "#1",
    "to": "#23",
    "ch": "#4",
    "value": "3",
    "duration": 32225
  },
  {
    "t": 954769,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 955326,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 957805,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 959448,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 981647,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 1025320,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1025738,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1026239,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1028133,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1029024,
    "command": "send to channel",
    "from": "#1",
    "to": "#19",
    "ch": "#4",
    "value": "4",
    "duration": 590732
  },
  {
    "t": 1037046,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1037603,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 1040277,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1042171,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1594048,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1594438,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1594828,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1597028,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1597697,
    "command": "send to channel",
    "from": "#1",
    "to": "#24",
    "ch": "#4",
    "value": "5",
    "duration": 169150
  },
  {
    "t": 1601763,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1602404,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 1604576,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1606164,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1618949,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 1740833,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1741724,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1742560,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1746849,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1747963,
    "command": "send to channel",
    "from": "#1",
    "to": "#25",
    "ch": "#4",
    "value": "6",
    "duration": 31808
  },
  {
    "t": 1763338,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1763895,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 1765315,
    "command": "unblock goroutine",
    "name": "#24"
  },
  {
    "t": 1766541,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1768574,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1778546,
    "command": "unblock goroutine",
    "name": "#25"
  },
  {
    "t": 1838318,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1838708,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1842134,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1844028,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1844640,
    "command": "send to channel",
    "from": "#1",
    "to": "#22",
    "ch": "#4",
    "value": "7",
    "duration": 102026
  },
  {
    "t": 1858845,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1882103,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1882604,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1883217,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 1885918,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1886448,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1886782,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1888258,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1888759,
    "command": "send to channel",
    "from": "#1",
    "to": "#27",
    "ch": "#4",
    "value": "8",
    "duration": 1171437
  },
  {
    "t": 1892325,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1892603,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 1894748,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1896308,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1945969,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 2001034,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2001508,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 2002037,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2004433,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 2005519,
    "command": "send to channel",
    "from": "#1",
    "to": "#21",
    "ch": "#4",
    "value": "9",
    "duration": 1125034
  },
  {
    "t": 2009808,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 2023484,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 2034709,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2035266,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 2037689,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2039304,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3059166,
    "command": "unblock goroutine",
    "name": "#27"
  },
  {
    "t": 3129633,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 3159213,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3159937,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3160717,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3164282,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3165397,
    "command": "send to channel",
    "from": "#1",
    "to": "#28",
    "ch": "#4",
    "value": "10",
    "duration": 18438
  },
  {
    "t": 3174421,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3175034,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 3177819,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3179824,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3183222,
    "command": "unblock goroutine",
    "name": "#28"
  },
  {
    "t": 3243050,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3243468,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3246894,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3248816,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3249457,
    "command": "send to channel",
    "from": "#1",
    "to": "#29",
    "ch": "#4",
    "value": "11",
    "duration": 96454
  },
  {
    "t": 3264525,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3265388,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 3268090,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3269845,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3344992,
    "command": "unblock goroutine",
    "name": "#29"
  },
  {
    "t": 3394737,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3395712,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3399110,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3399611,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3400336,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3402202,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3402954,
    "command": "send to channel",
    "from": "#1",
    "to": "#31",
    "ch": "#4",
    "value": "12",
    "duration": 49244
  },
  {
    "t": 3419554,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3420111,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 3422813,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3424679,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3451000,
    "command": "unblock goroutine",
    "name": "#31"
  },
  {
    "t": 3494367,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3494813,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3495258,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3497124,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3497737,
    "command": "send to channel",
    "from": "#1",
    "to": "#30",
    "ch": "#4",
    "value": "13",
    "duration": 60162
  },
  {
    "t": 3501971,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3502862,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 3505341,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3507012,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3556674,
    "command": "unblock goroutine",
    "name": "#30"
  },
  {
    "t": 3613132,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3613605,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3614218,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3616613,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3617365,
    "command": "send to channel",
    "from": "#1",
    "to": "#33",
    "ch": "#4",
    "value": "14",
    "duration": 110131
  },
  {
    "t": 3629788,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3630289,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 3632963,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3634690,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3726103,
    "command": "unblock goroutine",
    "name": "#33"
  },
  {
    "t": 3744959,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3745433,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3746185,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3748497,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3749583,
    "command": "send to channel",
    "from": "#1",
    "to": "#34",
    "ch": "#4",
    "value": "15",
    "duration": 94867
  },
  {
    "t": 3753817,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3754764,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 3757243,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3758942,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3827070,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3827488,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3828212,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3830440,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3831192,
    "command": "send to channel",
    "from": "#1",
    "to": "#32",
    "ch": "#4",
    "value": "16",
    "duration": 18856
  },
  {
    "t": 3835258,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3835955,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 3838350,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3840021,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3842723,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 3849268,
    "command": "unblock goroutine",
    "name": "#32"
  },
  {
    "t": 3913414,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3913887,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3918009,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3920516,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3921185,
    "command": "send to channel",
    "from": "#1",
    "to": "#35",
    "ch": "#4",
    "value": "17",
    "duration": 76706
  },
  {
    "t": 3925641,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 3928426,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 3941907,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3942882,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 3945667,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 3947422,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 3997279,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 4542220,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 4543752,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 4544727,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 4550688,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 4551885,
    "command": "send to channel",
    "from": "#1",
    "to": "#36",
    "ch": "#4",
    "value": "18",
    "duration": 66625
  },
  {
    "t": 4576535,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 4577315,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 4582189,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 4585560,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 4602773,
    "command": "block goroutine",
    "name": "#20"
  },
  {
    "t": 4617674,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 4730311,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 4731397,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 4735380,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 4736522,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 4737274,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 4740366,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 4741564,
    "command": "send to channel",
    "from": "#1",
    "to": "#37",
    "ch": "#4",
    "value": "19",
    "duration": 19692
  },
  {
    "t": 4748889,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 4749502,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 4751229,
    "command": "block goroutine",
    "name": "#19"
  },
  {
    "t": 4754042,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 4756994,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 4760559,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 4826348,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 4827406,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 4828047,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 4831389,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 4832225,
    "command": "send to channel",
    "from": "#1",
    "to": "#26",
    "ch": "#4",
    "value": "20",
    "duration": 25429
  },
  {
    "t": 4838770,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 4839494,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 4843951,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 4846764,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 4856707,
    "command": "unblock goroutine",
    "name": "#26"
  },
  {
    "t": 4909934,
    "command": "block goroutine",
    "name": "#18"
  },
  {
    "t": 4922635,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 4923415,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 4924195,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 4927649,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 4928651,
    "command": "send to channel",
    "from": "#1",
    "to": "#39",
    "ch": "#4",
    "value": "21",
    "duration": 36376
  },
  {
    "t": 4946366,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 4947062,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 4951435,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 4954332,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 4964470,
    "command": "unblock goroutine",
    "name": "#39"
  },
  {
    "t": 5023574,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5024215,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5029479,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 5032849,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5033657,
    "command": "send to channel",
    "from": "#1",
    "to": "#40",
    "ch": "#4",
    "value": "22",
    "duration": 123862
  },
  {
    "t": 5065409,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 5070673,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5071147,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5072233,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 5076634,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5077274,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5077831,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 5080840,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5081814,
    "command": "send to channel",
    "from": "#1",
    "to": "#38",
    "ch": "#4",
    "value": "23",
    "duration": 271900
  },
  {
    "t": 5088638,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5089140,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 5093401,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5096242,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 5156934,
    "command": "unblock goroutine",
    "name": "#40"
  },
  {
    "t": 5211832,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5212472,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5213280,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 5217096,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5218043,
    "command": "send to channel",
    "from": "#1",
    "to": "#20",
    "ch": "#4",
    "value": "24",
    "duration": 173718
  },
  {
    "t": 5235284,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5236398,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 5240994,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5243918,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 5352238,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 5390814,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 5451701,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5452509,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5458385,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 5462508,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5463538,
    "command": "send to channel",
    "from": "#1",
    "to": "#19",
    "ch": "#4",
    "value": "25",
    "duration": 48297
  },
  {
    "t": 5488522,
    "command": "block goroutine",
    "name": "#28"
  },
  {
    "t": 5489246,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5490778,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 5496293,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5499441,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 5503340,
    "command": "unblock goroutine",
    "name": "#28"
  },
  {
    "t": 5505540,
    "command": "block goroutine",
    "name": "#28"
  },
  {
    "t": 5511139,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 5579713,
    "command": "block goroutine",
    "name": "#24"
  },
  {
    "t": 5591216,
    "command": "unblock goroutine",
    "name": "#24"
  },
  {
    "t": 5593973,
    "command": "block goroutine",
    "name": "#24"
  },
  {
    "t": 5611716,
    "command": "block goroutine",
    "name": "#25"
  },
  {
    "t": 5625364,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5626116,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5626784,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 5630377,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5631519,
    "command": "send to channel",
    "from": "#1",
    "to": "#18",
    "ch": "#4",
    "value": "26",
    "duration": 54007
  },
  {
    "t": 5660180,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5661238,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 5666363,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5670235,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 5684133,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 5745827,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5746858,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5747805,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 5751342,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5752233,
    "command": "send to channel",
    "from": "#1",
    "to": "#28",
    "ch": "#4",
    "value": "27",
    "duration": 24957
  },
  {
    "t": 5755604,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 5762483,
    "command": "block goroutine",
    "name": "#17"
  },
  {
    "t": 5773959,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5774794,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 5776103,
    "command": "unblock goroutine",
    "name": "#28"
  },
  {
    "t": 5780198,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5783122,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 5847156,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5847769,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5848493,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 5851752,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5852643,
    "command": "send to channel",
    "from": "#1",
    "to": "#24",
    "ch": "#4",
    "value": "28",
    "duration": 66763
  },
  {
    "t": 5874814,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 5879438,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5879827,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5880552,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 5884925,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5885537,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5886122,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 5889103,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5889910,
    "command": "send to channel",
    "from": "#1",
    "to": "#25",
    "ch": "#4",
    "value": "29",
    "duration": 52726
  },
  {
    "t": 5896539,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5897013,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 5901636,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5904449,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 5917875,
    "command": "unblock goroutine",
    "name": "#24"
  },
  {
    "t": 5941522,
    "command": "unblock goroutine",
    "name": "#25"
  },
  {
    "t": 5972522,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5973079,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5978148,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 5981407,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 5982465,
    "command": "send to channel",
    "from": "#1",
    "to": "#22",
    "ch": "#4",
    "value": "30",
    "duration": 26099
  },
  {
    "t": 5989791,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5990849,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 5995417,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 5998202,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 6007617,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 6066080,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 6066887,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 6067779,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 6303303,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 6304389,
    "command": "send to channel",
    "from": "#1",
    "to": "#17",
    "ch": "#4",
    "value": "31",
    "duration": 312342
  },
  {
    "t": 6552419,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 6553310,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 6558045,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 6560942,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 6615645,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 6616341,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 6624864,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 6625505,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 6626118,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 6629321,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 6630324,
    "command": "send to channel",
    "from": "#1",
    "to": "#23",
    "ch": "#4",
    "value": "32",
    "duration": 14901
  },
  {
    "t": 6637732,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 6638373,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 6642997,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 6644779,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 6645949,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 6710428,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 6711069,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 6716500,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 6719759,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 6739674,
    "command": "send to channel",
    "from": "#1",
    "to": "#27",
    "ch": "#4",
    "value": "33",
    "duration": 62669
  },
  {
    "t": 6740147,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 6848272,
    "command": "block goroutine",
    "name": "#31"
  },
  {
    "t": 6875206,
    "command": "block goroutine",
    "name": "#30"
  },
  {
    "t": 6899271,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 6934700,
    "command": "block goroutine",
    "name": "#37"
  },
  {
    "t": 6986757,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 7000795,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7001630,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 7006477,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7009652,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 7055943,
    "command": "block goroutine",
    "name": "#32"
  },
  {
    "t": 7300603,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7301773,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 7302525,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 7306508,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 7308012,
    "command": "send to channel",
    "from": "#1",
    "to": "#31",
    "ch": "#4",
    "value": "34",
    "duration": 125477
  },
  {
    "t": 7385499,
    "command": "block goroutine",
    "name": "#29"
  },
  {
    "t": 7404857,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7406277,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 7411151,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7414187,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 7431790,
    "command": "unblock goroutine",
    "name": "#31"
  },
  {
    "t": 7472288,
    "command": "block goroutine",
    "name": "#36"
  },
  {
    "t": 7481842,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7482928,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 7483625,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 7486995,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 7488165,
    "command": "send to channel",
    "from": "#1",
    "to": "#30",
    "ch": "#4",
    "value": "35",
    "duration": 28437
  },
  {
    "t": 7495546,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7496298,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 7500587,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7503317,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 7511617,
    "command": "block goroutine",
    "name": "#33"
  },
  {
    "t": 7515600,
    "command": "unblock goroutine",
    "name": "#30"
  },
  {
    "t": 7572531,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7573144,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 7573896,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 7577294,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 7578269,
    "command": "send to channel",
    "from": "#1",
    "to": "#21",
    "ch": "#4",
    "value": "36",
    "duration": 31919
  },
  {
    "t": 7585566,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7586430,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 7590719,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7593449,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 7609213,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 7661632,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7662245,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 7667175,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 7670545,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 7671687,
    "command": "send to channel",
    "from": "#1",
    "to": "#37",
    "ch": "#4",
    "value": "37",
    "duration": 14679
  },
  {
    "t": 7679096,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7680322,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 7684583,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7685279,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 7687953,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 7747391,
    "command": "block goroutine",
    "name": "#39"
  },
  {
    "t": 7752433,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7753129,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 7753909,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 7757196,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 7758170,
    "command": "send to channel",
    "from": "#1",
    "to": "#32",
    "ch": "#4",
    "value": "38",
    "duration": 38549
  },
  {
    "t": 7776832,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7777556,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 7781901,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7784659,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 7795883,
    "command": "unblock goroutine",
    "name": "#32"
  },
  {
    "t": 7852592,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7853205,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 7854068,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 7857327,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 7858274,
    "command": "send to channel",
    "from": "#1",
    "to": "#29",
    "ch": "#4",
    "value": "39",
    "duration": 55009
  },
  {
    "t": 7865265,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7865989,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 7870251,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7873036,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 7912253,
    "command": "unblock goroutine",
    "name": "#29"
  },
  {
    "t": 7939966,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7940551,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 7944924,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 7948434,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 7949186,
    "command": "send to channel",
    "from": "#1",
    "to": "#36",
    "ch": "#4",
    "value": "40",
    "duration": 12951
  },
  {
    "t": 7956121,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7957179,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 7961329,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 7961636,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 7964560,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 8014723,
    "command": "block goroutine",
    "name": "#19"
  },
  {
    "t": 8027564,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8028204,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 8040320,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 8043830,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 8045194,
    "command": "send to channel",
    "from": "#1",
    "to": "#33",
    "ch": "#4",
    "value": "41",
    "duration": 97346
  },
  {
    "t": 8117918,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8118838,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 8123517,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8126497,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 8139198,
    "command": "block goroutine",
    "name": "#34"
  },
  {
    "t": 8141482,
    "command": "unblock goroutine",
    "name": "#33"
  },
  {
    "t": 8194096,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8194709,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 8195405,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 8198692,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 8200001,
    "command": "send to channel",
    "from": "#1",
    "to": "#39",
    "ch": "#4",
    "value": "42",
    "duration": 50581
  },
  {
    "t": 8224567,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8225347,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 8229748,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8232672,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 8249245,
    "command": "unblock goroutine",
    "name": "#39"
  },
  {
    "t": 8303614,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8304282,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 8309184,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 8313279,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 8314420,
    "command": "send to channel",
    "from": "#1",
    "to": "#19",
    "ch": "#4",
    "value": "43",
    "duration": 17938
  },
  {
    "t": 8326453,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8327177,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 8331550,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 8332079,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8335449,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 8394275,
    "command": "block goroutine",
    "name": "#35"
  },
  {
    "t": 8402101,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8402826,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 8403605,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 8407366,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 8408340,
    "command": "send to channel",
    "from": "#1",
    "to": "#34",
    "ch": "#4",
    "value": "44",
    "duration": 18495
  },
  {
    "t": 8416473,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8417142,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 8421487,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8424662,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 8425721,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 8489866,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8490479,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 8495130,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 8498639,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 8499336,
    "command": "send to channel",
    "from": "#1",
    "to": "#35",
    "ch": "#4",
    "value": "45",
    "duration": 33061
  },
  {
    "t": 8506076,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8506884,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 8511201,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8513986,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 8530642,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 8582003,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8582616,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 8583312,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 8586599,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 8600442,
    "command": "send to channel",
    "from": "#1",
    "to": "#18",
    "ch": "#4",
    "value": "46",
    "duration": 171128
  },
  {
    "t": 8600887,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 8929886,
    "command": "block goroutine",
    "name": "#17"
  },
  {
    "t": 8945957,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 8949689,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8950580,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 8955789,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 8956235,
    "command": "block goroutine",
    "name": "#40"
  },
  {
    "t": 8959131,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 9020073,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9020798,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 9021438,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 9023444,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 9024725,
    "command": "send to channel",
    "from": "#1",
    "to": "#17",
    "ch": "#4",
    "value": "47",
    "duration": 31557
  },
  {
    "t": 9030073,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9030852,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 9033109,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9034696,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 9044584,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 9101682,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9102295,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 9102629,
    "command": "block goroutine",
    "name": "#20"
  },
  {
    "t": 9103047,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 9104830,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 9108451,
    "command": "send to channel",
    "from": "#1",
    "to": "#40",
    "ch": "#4",
    "value": "48",
    "duration": 11948
  },
  {
    "t": 9113046,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9113576,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 9115804,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9117252,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 9119480,
    "command": "unblock goroutine",
    "name": "#40"
  },
  {
    "t": 9147640,
    "command": "block goroutine",
    "name": "#28"
  },
  {
    "t": 9415222,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9416197,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 9420765,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 9423049,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 9424163,
    "command": "send to channel",
    "from": "#1",
    "to": "#20",
    "ch": "#4",
    "value": "49",
    "duration": 14706
  },
  {
    "t": 9428285,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9428982,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 9431349,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9433187,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 9437393,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 9496413,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9496748,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 9500062,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 9501761,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 9502318,
    "command": "send to channel",
    "from": "#1",
    "to": "#28",
    "ch": "#4",
    "value": "50",
    "duration": 11615
  },
  {
    "t": 9506440,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9506970,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 9509114,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9510646,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 9512652,
    "command": "unblock goroutine",
    "name": "#28"
  },
  {
    "t": 9574262,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9575154,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 9577438,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9577939,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 9581365,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 9582925,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 9584484,
    "command": "send to channel",
    "from": "#1",
    "to": "#26",
    "ch": "#4",
    "value": "51",
    "duration": 97987
  },
  {
    "t": 9584707,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 9803324,
    "command": "block goroutine",
    "name": "#38"
  },
  {
    "t": 9820788,
    "command": "block goroutine",
    "name": "#30"
  },
  {
    "t": 9845187,
    "command": "block goroutine",
    "name": "#25"
  },
  {
    "t": 9863320,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 9868222,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9868946,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 9873820,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9877190,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 9927604,
    "command": "block goroutine",
    "name": "#32"
  },
  {
    "t": 9941503,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9942840,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 9943675,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 9947212,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 9948661,
    "command": "send to channel",
    "from": "#1",
    "to": "#38",
    "ch": "#4",
    "value": "52",
    "duration": 23563
  },
  {
    "t": 9956682,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9957184,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 9959802,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 9961752,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 9965010,
    "command": "block goroutine",
    "name": "#27"
  },
  {
    "t": 9971333,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 10001526,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10001999,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10002473,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10004534,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10005258,
    "command": "send to channel",
    "from": "#1",
    "to": "#30",
    "ch": "#4",
    "value": "53",
    "duration": 13146
  },
  {
    "t": 10008879,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10009297,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 10010856,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10011970,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10017819,
    "command": "unblock goroutine",
    "name": "#30"
  },
  {
    "t": 10050435,
    "command": "block goroutine",
    "name": "#37"
  },
  {
    "t": 10081965,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10082884,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10088148,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10091741,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10092967,
    "command": "send to channel",
    "from": "#1",
    "to": "#25",
    "ch": "#4",
    "value": "54",
    "duration": 60245
  },
  {
    "t": 10131710,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10132518,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 10139314,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 10152182,
    "command": "unblock goroutine",
    "name": "#25"
  },
  {
    "t": 10161150,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10162070,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10162599,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10164465,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10165384,
    "command": "send to channel",
    "from": "#1",
    "to": "#32",
    "ch": "#4",
    "value": "55",
    "duration": 33841
  },
  {
    "t": 10170091,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10170788,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 10173461,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10175383,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10197582,
    "command": "block goroutine",
    "name": "#36"
  },
  {
    "t": 10197777,
    "command": "unblock goroutine",
    "name": "#32"
  },
  {
    "t": 10257494,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10258413,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10261142,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10264067,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10265097,
    "command": "send to channel",
    "from": "#1",
    "to": "#27",
    "ch": "#4",
    "value": "56",
    "duration": 22227
  },
  {
    "t": 10275236,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10275737,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 10278912,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10280834,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10286572,
    "command": "unblock goroutine",
    "name": "#27"
  },
  {
    "t": 10340774,
    "command": "block goroutine",
    "name": "#19"
  },
  {
    "t": 10360131,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10360911,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10361524,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10364087,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10365173,
    "command": "send to channel",
    "from": "#1",
    "to": "#37",
    "ch": "#4",
    "value": "57",
    "duration": 22978
  },
  {
    "t": 10370660,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10371189,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 10373947,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10375729,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10387204,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 10413163,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10413525,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10414250,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10416311,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10417035,
    "command": "send to channel",
    "from": "#1",
    "to": "#22",
    "ch": "#4",
    "value": "58",
    "duration": 20082
  },
  {
    "t": 10421491,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10422160,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 10424806,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10426505,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10436253,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 10490344,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10490706,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10491235,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10493268,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10493992,
    "command": "send to channel",
    "from": "#1",
    "to": "#36",
    "ch": "#4",
    "value": "59",
    "duration": 41418
  },
  {
    "t": 10499285,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10499842,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 10502488,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10504187,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10533655,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 10567775,
    "command": "block goroutine",
    "name": "#29"
  },
  {
    "t": 10587355,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10588107,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10588664,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10591143,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10592118,
    "command": "send to channel",
    "from": "#1",
    "to": "#19",
    "ch": "#4",
    "value": "60",
    "duration": 31112
  },
  {
    "t": 10597132,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10597633,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 10600390,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10602090,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10616935,
    "command": "block goroutine",
    "name": "#31"
  },
  {
    "t": 10622088,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 10671833,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 10703864,
    "command": "block goroutine",
    "name": "#33"
  },
  {
    "t": 10714782,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10716509,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10717874,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10722609,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10724057,
    "command": "send to channel",
    "from": "#1",
    "to": "#29",
    "ch": "#4",
    "value": "61",
    "duration": 25291
  },
  {
    "t": 10731410,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10732023,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 10735115,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10738012,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10748624,
    "command": "unblock goroutine",
    "name": "#29"
  },
  {
    "t": 10785751,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 10813716,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10815025,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10816083,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10820623,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10822072,
    "command": "send to channel",
    "from": "#1",
    "to": "#31",
    "ch": "#4",
    "value": "62",
    "duration": 49940
  },
  {
    "t": 10829536,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10838811,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 10841624,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10842098,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10842516,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10844243,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10845050,
    "command": "send to channel",
    "from": "#1",
    "to": "#21",
    "ch": "#4",
    "value": "63",
    "duration": 239897
  },
  {
    "t": 10848866,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10849256,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 10851791,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10853824,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10870591,
    "command": "unblock goroutine",
    "name": "#31"
  },
  {
    "t": 10926074,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10926687,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10927606,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10930113,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10931144,
    "command": "send to channel",
    "from": "#1",
    "to": "#33",
    "ch": "#4",
    "value": "64",
    "duration": 21892
  },
  {
    "t": 10936157,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10936686,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 10939360,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 10941198,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 10951922,
    "command": "unblock goroutine",
    "name": "#33"
  },
  {
    "t": 11007265,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11007655,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 11008435,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 11010469,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 11010998,
    "command": "send to channel",
    "from": "#1",
    "to": "#23",
    "ch": "#4",
    "value": "65",
    "duration": 19915
  },
  {
    "t": 11015705,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11016234,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 11018741,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11020468,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 11029687,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 11067623,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11068375,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 11069238,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 11073138,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 11074669,
    "command": "send to channel",
    "from": "#1",
    "to": "#39",
    "ch": "#4",
    "value": "66",
    "duration": 127595
  },
  {
    "t": 11075171,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 11084279,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 11285794,
    "command": "block goroutine",
    "name": "#18"
  },
  {
    "t": 11401440,
    "command": "block goroutine",
    "name": "#24"
  },
  {
    "t": 11453942,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 11457591,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11458120,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 11461936,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11465000,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 11526889,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11527585,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 11528059,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 11530259,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 11531485,
    "command": "send to channel",
    "from": "#1",
    "to": "#18",
    "ch": "#4",
    "value": "67",
    "duration": 31529
  },
  {
    "t": 11535997,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11536554,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 11538699,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11540314,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 11562067,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 11606604,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11607133,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 11607718,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 11609501,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 11610002,
    "command": "send to channel",
    "from": "#1",
    "to": "#24",
    "ch": "#4",
    "value": "68",
    "duration": 21558
  },
  {
    "t": 11614068,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11614626,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 11616770,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11618219,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 11630836,
    "command": "unblock goroutine",
    "name": "#24"
  },
  {
    "t": 11685539,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11685929,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 11689578,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 11691499,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 11692474,
    "command": "send to channel",
    "from": "#1",
    "to": "#35",
    "ch": "#4",
    "value": "69",
    "duration": 70969
  },
  {
    "t": 11692753,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 11773443,
    "command": "block goroutine",
    "name": "#30"
  },
  {
    "t": 11846891,
    "command": "block goroutine",
    "name": "#38"
  },
  {
    "t": 11940588,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 11943317,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11943735,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 11946437,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11948220,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12010025,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12010331,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12010749,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12012003,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12012727,
    "command": "send to channel",
    "from": "#1",
    "to": "#30",
    "ch": "#4",
    "value": "70",
    "duration": 20917
  },
  {
    "t": 12016125,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12016598,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 12018075,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12019077,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12032781,
    "command": "unblock goroutine",
    "name": "#30"
  },
  {
    "t": 12086509,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12087400,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12091885,
    "command": "block goroutine",
    "name": "#34"
  },
  {
    "t": 12092191,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12094781,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12099739,
    "command": "send to channel",
    "from": "#1",
    "to": "#38",
    "ch": "#4",
    "value": "71",
    "duration": 10389
  },
  {
    "t": 12106229,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12107371,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 12109154,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 12110295,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12112245,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12127509,
    "command": "block goroutine",
    "name": "#20"
  },
  {
    "t": 12157200,
    "command": "block goroutine",
    "name": "#37"
  },
  {
    "t": 12176140,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12176780,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12180095,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12181877,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12183131,
    "command": "send to channel",
    "from": "#1",
    "to": "#34",
    "ch": "#4",
    "value": "72",
    "duration": 10333
  },
  {
    "t": 12186390,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12186835,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 12188339,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12189732,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12192629,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 12203631,
    "command": "block goroutine",
    "name": "#40"
  },
  {
    "t": 12254741,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12255130,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12258612,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12260395,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12261258,
    "command": "send to channel",
    "from": "#1",
    "to": "#20",
    "ch": "#4",
    "value": "73",
    "duration": 16099
  },
  {
    "t": 12264378,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12264823,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 12266327,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12268611,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12276159,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 12333536,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12333815,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12336795,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12337993,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12338689,
    "command": "send to channel",
    "from": "#1",
    "to": "#37",
    "ch": "#4",
    "value": "74",
    "duration": 14512
  },
  {
    "t": 12341307,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12341948,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 12343368,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12344399,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12352003,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 12409073,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 12410327,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12410967,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12415312,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12416120,
    "command": "block goroutine",
    "name": "#27"
  },
  {
    "t": 12418070,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12419657,
    "command": "send to channel",
    "from": "#1",
    "to": "#40",
    "ch": "#4",
    "value": "75",
    "duration": 13843
  },
  {
    "t": 12424392,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12425451,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 12428013,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12429657,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12432136,
    "command": "unblock goroutine",
    "name": "#40"
  },
  {
    "t": 12435283,
    "command": "block goroutine",
    "name": "#17"
  },
  {
    "t": 12495752,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12496114,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12496587,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12498258,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12499066,
    "command": "send to channel",
    "from": "#1",
    "to": "#22",
    "ch": "#4",
    "value": "76",
    "duration": 19414
  },
  {
    "t": 12502492,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12502910,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 12504470,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12505556,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12517533,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 12575829,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12576609,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12577444,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12581511,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12583154,
    "command": "send to channel",
    "from": "#1",
    "to": "#27",
    "ch": "#4",
    "value": "77",
    "duration": 23647
  },
  {
    "t": 12589059,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12589699,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 12592401,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12594323,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12605882,
    "command": "unblock goroutine",
    "name": "#27"
  },
  {
    "t": 12667687,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12668439,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12669275,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12672952,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12674010,
    "command": "send to channel",
    "from": "#1",
    "to": "#17",
    "ch": "#4",
    "value": "78",
    "duration": 25653
  },
  {
    "t": 12679748,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12680444,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 12682756,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12684037,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12698103,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 12751023,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 12751497,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12754644,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 12756232,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 12771774,
    "command": "send to channel",
    "from": "#1",
    "to": "#29",
    "ch": "#4",
    "value": "79",
    "duration": 331143
  },
  {
    "t": 12771997,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 13146562,
    "command": "block goroutine",
    "name": "#28"
  },
  {
    "t": 13167229,
    "command": "block goroutine",
    "name": "#32"
  },
  {
    "t": 13199956,
    "command": "block goroutine",
    "name": "#36"
  },
  {
    "t": 13263739,
    "command": "block goroutine",
    "name": "#25"
  },
  {
    "t": 13287331,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 13289893,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13290422,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 13294238,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13295826,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 13321395,
    "command": "block goroutine",
    "name": "#19"
  },
  {
    "t": 13359330,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13360333,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 13360751,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 13362478,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 13363536,
    "command": "send to channel",
    "from": "#1",
    "to": "#28",
    "ch": "#4",
    "value": "80",
    "duration": 10083
  },
  {
    "t": 13367213,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13367798,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 13369357,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13370472,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 13372338,
    "command": "unblock goroutine",
    "name": "#28"
  },
  {
    "t": 13396737,
    "command": "block goroutine",
    "name": "#26"
  },
  {
    "t": 13438683,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13439073,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 13439519,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 13441469,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 13442416,
    "command": "send to channel",
    "from": "#1",
    "to": "#32",
    "ch": "#4",
    "value": "81",
    "duration": 22811
  },
  {
    "t": 13449351,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13449769,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 13451384,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13452470,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 13464057,
    "command": "unblock goroutine",
    "name": "#32"
  },
  {
    "t": 13518036,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13518287,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 13521211,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 13522493,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 13523022,
    "command": "send to channel",
    "from": "#1",
    "to": "#36",
    "ch": "#4",
    "value": "82",
    "duration": 15180
  },
  {
    "t": 13525640,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13526392,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 13527812,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13529233,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 13537032,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 13604046,
    "command": "block goroutine",
    "name": "#33"
  },
  {
    "t": 13779129,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13779937,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 13784115,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 13805561,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 13806759,
    "command": "send to channel",
    "from": "#1",
    "to": "#25",
    "ch": "#4",
    "value": "83",
    "duration": 14428
  },
  {
    "t": 13811550,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13811995,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 13813639,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13815394,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 13819989,
    "command": "unblock goroutine",
    "name": "#25"
  },
  {
    "t": 13838762,
    "command": "block goroutine",
    "name": "#18"
  },
  {
    "t": 13856588,
    "command": "block goroutine",
    "name": "#30"
  },
  {
    "t": 13940592,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13941511,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 13945216,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 13948391,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 13949449,
    "command": "send to channel",
    "from": "#1",
    "to": "#19",
    "ch": "#4",
    "value": "84",
    "duration": 10417
  },
  {
    "t": 13954129,
    "command": "block goroutine",
    "name": "#34"
  },
  {
    "t": 13955299,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13956218,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 13958836,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 13959031,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 13962150,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 13981815,
    "command": "block goroutine",
    "name": "#39"
  },
  {
    "t": 14025655,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14026073,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14029109,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14031003,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14031894,
    "command": "send to channel",
    "from": "#1",
    "to": "#26",
    "ch": "#4",
    "value": "85",
    "duration": 24956
  },
  {
    "t": 14035710,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14036295,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 14038049,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14039164,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14055597,
    "command": "unblock goroutine",
    "name": "#26"
  },
  {
    "t": 14104869,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14105091,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14108406,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14109604,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14110105,
    "command": "send to channel",
    "from": "#1",
    "to": "#33",
    "ch": "#4",
    "value": "86",
    "duration": 16266
  },
  {
    "t": 14112640,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14113252,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 14114923,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14115954,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14125201,
    "command": "unblock goroutine",
    "name": "#33"
  },
  {
    "t": 14181380,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14181631,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14184639,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14185781,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14186255,
    "command": "send to channel",
    "from": "#1",
    "to": "#18",
    "ch": "#4",
    "value": "87",
    "duration": 18188
  },
  {
    "t": 14189736,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14190126,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 14191630,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14193357,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14203161,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 14263268,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14264326,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14269228,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14273044,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14274298,
    "command": "send to channel",
    "from": "#1",
    "to": "#30",
    "ch": "#4",
    "value": "88",
    "duration": 14344
  },
  {
    "t": 14279618,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14280397,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 14282514,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14284492,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14287444,
    "command": "unblock goroutine",
    "name": "#30"
  },
  {
    "t": 14331340,
    "command": "block goroutine",
    "name": "#31"
  },
  {
    "t": 14348609,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14349250,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14349723,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14351144,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14352063,
    "command": "send to channel",
    "from": "#1",
    "to": "#34",
    "ch": "#4",
    "value": "89",
    "duration": 16767
  },
  {
    "t": 14357884,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14358441,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 14360224,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14361366,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14367716,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 14426291,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14426569,
    "command": "block goroutine",
    "name": "#38"
  },
  {
    "t": 14427071,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14430747,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14432056,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14432808,
    "command": "send to channel",
    "from": "#1",
    "to": "#39",
    "ch": "#4",
    "value": "90",
    "duration": 5766
  },
  {
    "t": 14436151,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14436764,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 14437878,
    "command": "unblock goroutine",
    "name": "#39"
  },
  {
    "t": 14439354,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14440579,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14498068,
    "command": "block goroutine",
    "name": "#24"
  },
  {
    "t": 14502524,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14502858,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14503332,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14504669,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14505337,
    "command": "send to channel",
    "from": "#1",
    "to": "#31",
    "ch": "#4",
    "value": "91",
    "duration": 14762
  },
  {
    "t": 14508345,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14508847,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 14510518,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14511716,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14518902,
    "command": "unblock goroutine",
    "name": "#31"
  },
  {
    "t": 14574997,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14575276,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14578674,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14579983,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14580540,
    "command": "send to channel",
    "from": "#1",
    "to": "#38",
    "ch": "#4",
    "value": "92",
    "duration": 13927
  },
  {
    "t": 14583883,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14584467,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 14586334,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14587476,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14593353,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 14595414,
    "command": "block goroutine",
    "name": "#27"
  },
  {
    "t": 14658835,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14659782,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14665714,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14670616,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14672037,
    "command": "send to channel",
    "from": "#1",
    "to": "#24",
    "ch": "#4",
    "value": "93",
    "duration": 25736
  },
  {
    "t": 14678861,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14679557,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 14682844,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14685156,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14696742,
    "command": "unblock goroutine",
    "name": "#24"
  },
  {
    "t": 14752587,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14753061,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14753618,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14755456,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14755651,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 14771137,
    "command": "send to channel",
    "from": "#1",
    "to": "#27",
    "ch": "#4",
    "value": "94",
    "duration": 8663
  },
  {
    "t": 14775566,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14776151,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 14777794,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14778101,
    "command": "unblock goroutine",
    "name": "#27"
  },
  {
    "t": 14779215,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14835199,
    "command": "block goroutine",
    "name": "#20"
  },
  {
    "t": 14842162,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14842636,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14843081,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14844586,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14845728,
    "command": "send to channel",
    "from": "#1",
    "to": "#23",
    "ch": "#4",
    "value": "95",
    "duration": 6461
  },
  {
    "t": 14848763,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14849237,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 14851103,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 14851326,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14852719,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14855838,
    "command": "block goroutine",
    "name": "#35"
  },
  {
    "t": 14882076,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 14914719,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14914970,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14918117,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14919398,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14920123,
    "command": "send to channel",
    "from": "#1",
    "to": "#20",
    "ch": "#4",
    "value": "96",
    "duration": 14121
  },
  {
    "t": 14923632,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14924022,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 14925693,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14926835,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14932879,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 14991788,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 14992067,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14994796,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 14996050,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 14996495,
    "command": "send to channel",
    "from": "#1",
    "to": "#35",
    "ch": "#4",
    "value": "97",
    "duration": 12673
  },
  {
    "t": 14999670,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15000339,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 15001927,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15003041,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 15007998,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 15066016,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15066267,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 15068968,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 15070277,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 15070695,
    "command": "send to channel",
    "from": "#1",
    "to": "#21",
    "ch": "#4",
    "value": "98",
    "duration": 13398
  },
  {
    "t": 15073453,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15073843,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 15075486,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15076656,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 15083090,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 15140160,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15140467,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 15143447,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 15144700,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 15145759,
    "command": "send to channel",
    "from": "#1",
    "to": "#40",
    "ch": "#4",
    "value": "99",
    "duration": 231624
  },
  {
    "t": 15146037,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 15489742,
    "command": "block goroutine",
    "name": "#29"
  },
  {
    "t": 15507986,
    "command": "block goroutine",
    "name": "#17"
  },
  {
    "t": 15573134,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 15576977,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15577674,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 15581907,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15584748,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 15635663,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 15645718,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15646303,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 15646749,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 15648587,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 15649729,
    "command": "send to channel",
    "from": "#1",
    "to": "#29",
    "ch": "#4",
    "value": "100",
    "duration": 11642
  },
  {
    "t": 15654353,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15655077,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 15657026,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15658503,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 15660229,
    "command": "unblock goroutine",
    "name": "#29"
  },
  {
    "t": 15725043,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15725517,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 15728943,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 15730530,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 15731059,
    "command": "send to channel",
    "from": "#1",
    "to": "#17",
    "ch": "#4",
    "value": "101",
    "duration": 14512
  },
  {
    "t": 15735572,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15736073,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 15738050,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15739025,
    "command": "block goroutine",
    "name": "#19"
  },
  {
    "t": 15739582,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 15744791,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 15803003,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15803365,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 15806262,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 15807794,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 15808518,
    "command": "send to channel",
    "from": "#1",
    "to": "#22",
    "ch": "#4",
    "value": "102",
    "duration": 9526
  },
  {
    "t": 15812418,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15812919,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 15814897,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15816261,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 15816846,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 15879766,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15880100,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 15883777,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 15885364,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 15885838,
    "command": "send to channel",
    "from": "#1",
    "to": "#19",
    "ch": "#4",
    "value": "103",
    "duration": 31418
  },
  {
    "t": 15889347,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15890016,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 15891966,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15893525,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 15916755,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 15959063,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15959453,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 15961180,
    "command": "block goroutine",
    "name": "#37"
  },
  {
    "t": 15964299,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 15967391,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 15968366,
    "command": "send to channel",
    "from": "#1",
    "to": "#37",
    "ch": "#4",
    "value": "104",
    "duration": 11280
  },
  {
    "t": 15974243,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15974939,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 15978616,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 15979034,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 15981373,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16029447,
    "command": "block goroutine",
    "name": "#28"
  },
  {
    "t": 16054153,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16054821,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16063651,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16065684,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16066380,
    "command": "send to channel",
    "from": "#1",
    "to": "#28",
    "ch": "#4",
    "value": "105",
    "duration": 10389
  },
  {
    "t": 16070530,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16071115,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 16073176,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16074625,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16076324,
    "command": "unblock goroutine",
    "name": "#28"
  },
  {
    "t": 16138074,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16138798,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16140887,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16143700,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16145817,
    "command": "send to channel",
    "from": "#1",
    "to": "#34",
    "ch": "#4",
    "value": "106",
    "duration": 9665
  },
  {
    "t": 16146207,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 16329729,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16331540,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16332069,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 16336135,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16338642,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16399640,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16400002,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16401840,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16404626,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16406158,
    "command": "send to channel",
    "from": "#1",
    "to": "#33",
    "ch": "#4",
    "value": "107",
    "duration": 21976
  },
  {
    "t": 16406520,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 16476709,
    "command": "block goroutine",
    "name": "#25"
  },
  {
    "t": 16599457,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16600710,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16601044,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 16603551,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16605027,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16645498,
    "command": "block goroutine",
    "name": "#32"
  },
  {
    "t": 16670147,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16670677,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16671150,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16673128,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16673991,
    "command": "send to channel",
    "from": "#1",
    "to": "#25",
    "ch": "#4",
    "value": "108",
    "duration": 17297
  },
  {
    "t": 16678141,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16678615,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 16680648,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16682180,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16690313,
    "command": "unblock goroutine",
    "name": "#25"
  },
  {
    "t": 16692959,
    "command": "block goroutine",
    "name": "#24"
  },
  {
    "t": 16717748,
    "command": "block goroutine",
    "name": "#39"
  },
  {
    "t": 16747829,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16748219,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16748609,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16750113,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16750754,
    "command": "send to channel",
    "from": "#1",
    "to": "#32",
    "ch": "#4",
    "value": "109",
    "duration": 15792
  },
  {
    "t": 16754653,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16755266,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 16757188,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16758608,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16765738,
    "command": "unblock goroutine",
    "name": "#32"
  },
  {
    "t": 16824842,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16825316,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16828575,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16830218,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16830719,
    "command": "send to channel",
    "from": "#1",
    "to": "#24",
    "ch": "#4",
    "value": "110",
    "duration": 17213
  },
  {
    "t": 16834424,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16834869,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 16836763,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16838156,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16846484,
    "command": "unblock goroutine",
    "name": "#24"
  },
  {
    "t": 16904641,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16905031,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16907259,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16910351,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16911047,
    "command": "send to channel",
    "from": "#1",
    "to": "#39",
    "ch": "#4",
    "value": "111",
    "duration": 21224
  },
  {
    "t": 16916952,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16917565,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 16921241,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16923776,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16931463,
    "command": "unblock goroutine",
    "name": "#39"
  },
  {
    "t": 16989035,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 16989397,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16989843,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 16991430,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 16992127,
    "command": "send to channel",
    "from": "#1",
    "to": "#26",
    "ch": "#4",
    "value": "112",
    "duration": 125811
  },
  {
    "t": 16992322,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 17249042,
    "command": "block goroutine",
    "name": "#36"
  },
  {
    "t": 17258094,
    "command": "block goroutine",
    "name": "#30"
  },
  {
    "t": 17306363,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 17308730,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 17309315,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 17313243,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 17314997,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 17375912,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 17376413,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 17376775,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 17378335,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 17379087,
    "command": "send to channel",
    "from": "#1",
    "to": "#36",
    "ch": "#4",
    "value": "113",
    "duration": 15124
  },
  {
    "t": 17382513,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 17382931,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 17384908,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 17386273,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 17393375,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 17454373,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 17454930,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 17458913,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 17461615,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 17462367,
    "command": "send to channel",
    "from": "#1",
    "to": "#30",
    "ch": "#4",
    "value": "114",
    "duration": 12617
  },
  {
    "t": 17468522,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 17469302,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 17472840,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 17474511,
    "command": "unblock goroutine",
    "name": "#30"
  },
  {
    "t": 17475151,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 17538572,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 17539074,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 17542945,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 17545508,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 17547095,
    "command": "send to channel",
    "from": "#1",
    "to": "#19",
    "ch": "#4",
    "value": "115",
    "duration": 139738
  },
  {
    "t": 17547402,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 17710759,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 17736801,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 17742901,
    "command": "block goroutine",
    "name": "#31"
  },
  {
    "t": 17811531,
    "command": "block goroutine",
    "name": "#34"
  },
  {
    "t": 17853032,
    "command": "block goroutine",
    "name": "#18"
  },
  {
    "t": 17862307,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 17863894,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 17864284,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 17868323,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 17870607,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 17933554,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 17934083,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 17934696,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 17937203,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 17938150,
    "command": "send to channel",
    "from": "#1",
    "to": "#22",
    "ch": "#4",
    "value": "116",
    "duration": 30945
  },
  {
    "t": 17944250,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 17944890,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 17948316,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 17950517,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 17967897,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 18014550,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 18018338,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 18019118,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 18020121,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 18023101,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 18023937,
    "command": "send to channel",
    "from": "#1",
    "to": "#23",
    "ch": "#4",
    "value": "117",
    "duration": 12060
  },
  {
    "t": 18030092,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 18030956,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 18034298,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 18034967,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 18037975,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 18520526,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 18521139,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 18521724,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 18751677,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 18752568,
    "command": "send to channel",
    "from": "#1",
    "to": "#31",
    "ch": "#4",
    "value": "118",
    "duration": 3305525
  },
  {
    "t": 21604788,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 21605623,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 21824798,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 21825522,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 21826107,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22056366,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22056896,
    "command": "unblock goroutine",
    "name": "#31"
  },
  {
    "t": 22057425,
    "command": "send to channel",
    "from": "#1",
    "to": "#34",
    "ch": "#4",
    "value": "119",
    "duration": 240872
  },
  {
    "t": 22063720,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22064277,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 22067703,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22070293,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22286877,
    "command": "block goroutine",
    "name": "#35"
  },
  {
    "t": 22297489,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 22318267,
    "command": "block goroutine",
    "name": "#38"
  },
  {
    "t": 22353334,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22353947,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22354504,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22357400,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22358598,
    "command": "send to channel",
    "from": "#1",
    "to": "#18",
    "ch": "#4",
    "value": "120",
    "duration": 22505
  },
  {
    "t": 22364809,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22365394,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 22368876,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22371076,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22380518,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 22438174,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22438675,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22439149,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22441655,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22442324,
    "command": "send to channel",
    "from": "#1",
    "to": "#21",
    "ch": "#4",
    "value": "121",
    "duration": 22477
  },
  {
    "t": 22447894,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22448841,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 22452434,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22455415,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22463687,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 22485830,
    "command": "block goroutine",
    "name": "#27"
  },
  {
    "t": 22521621,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22522290,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22522902,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22525409,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22526245,
    "command": "send to channel",
    "from": "#1",
    "to": "#35",
    "ch": "#4",
    "value": "122",
    "duration": 27156
  },
  {
    "t": 22532567,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22533208,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 22536606,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22538890,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22552705,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 22606015,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22606517,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22607129,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22609608,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22610333,
    "command": "send to channel",
    "from": "#1",
    "to": "#38",
    "ch": "#4",
    "value": "123",
    "duration": 30638
  },
  {
    "t": 22616154,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22616794,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 22620220,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22622421,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22639578,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 22689463,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22690298,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22696481,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22699128,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22699768,
    "command": "send to channel",
    "from": "#1",
    "to": "#27",
    "ch": "#4",
    "value": "124",
    "duration": 24232
  },
  {
    "t": 22705812,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22706397,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 22709739,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22710102,
    "command": "block goroutine",
    "name": "#17"
  },
  {
    "t": 22712107,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22722970,
    "command": "unblock goroutine",
    "name": "#27"
  },
  {
    "t": 22724279,
    "command": "block goroutine",
    "name": "#20"
  },
  {
    "t": 22756504,
    "command": "block goroutine",
    "name": "#28"
  },
  {
    "t": 22779344,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22779873,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22780458,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22782965,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22783912,
    "command": "send to channel",
    "from": "#1",
    "to": "#17",
    "ch": "#4",
    "value": "125",
    "duration": 34482
  },
  {
    "t": 22789705,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22790541,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 22793911,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22796083,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22817307,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 22831234,
    "command": "block goroutine",
    "name": "#33"
  },
  {
    "t": 22875464,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22875965,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22876495,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22878974,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22879781,
    "command": "send to channel",
    "from": "#1",
    "to": "#20",
    "ch": "#4",
    "value": "126",
    "duration": 18355
  },
  {
    "t": 22886104,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22886745,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 22887859,
    "command": "block goroutine",
    "name": "#29"
  },
  {
    "t": 22890282,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22892649,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22897162,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 22959329,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22959803,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22960304,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22962811,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 22963451,
    "command": "send to channel",
    "from": "#1",
    "to": "#28",
    "ch": "#4",
    "value": "127",
    "duration": 17715
  },
  {
    "t": 22968743,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22969273,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 22972754,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 22974983,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 22980163,
    "command": "unblock goroutine",
    "name": "#28"
  },
  {
    "t": 23038571,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23039072,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23046982,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23049573,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23050297,
    "command": "send to channel",
    "from": "#1",
    "to": "#33",
    "ch": "#4",
    "value": "128",
    "duration": 11949
  },
  {
    "t": 23056619,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23057678,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 23061048,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23061800,
    "command": "unblock goroutine",
    "name": "#33"
  },
  {
    "t": 23063388,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23100878,
    "command": "block goroutine",
    "name": "#37"
  },
  {
    "t": 23126920,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23127449,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23131711,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23134357,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23135137,
    "command": "send to channel",
    "from": "#1",
    "to": "#29",
    "ch": "#4",
    "value": "129",
    "duration": 13453
  },
  {
    "t": 23141543,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23142156,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 23145526,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23147169,
    "command": "unblock goroutine",
    "name": "#29"
  },
  {
    "t": 23147921,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23167140,
    "command": "block goroutine",
    "name": "#39"
  },
  {
    "t": 23195187,
    "command": "block goroutine",
    "name": "#32"
  },
  {
    "t": 23211621,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23212150,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23216216,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23218751,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23219782,
    "command": "send to channel",
    "from": "#1",
    "to": "#37",
    "ch": "#4",
    "value": "130",
    "duration": 11753
  },
  {
    "t": 23225269,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23225881,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 23229363,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23230700,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 23231730,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23295569,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23296043,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23300249,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23302811,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23303479,
    "command": "send to channel",
    "from": "#1",
    "to": "#39",
    "ch": "#4",
    "value": "131",
    "duration": 25458
  },
  {
    "t": 23308772,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23309440,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 23312866,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23315066,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23327656,
    "command": "unblock goroutine",
    "name": "#39"
  },
  {
    "t": 23381885,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23382387,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23383027,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23385534,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23386035,
    "command": "send to channel",
    "from": "#1",
    "to": "#32",
    "ch": "#4",
    "value": "132",
    "duration": 31391
  },
  {
    "t": 23391495,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23392052,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 23395450,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23397622,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23416005,
    "command": "unblock goroutine",
    "name": "#32"
  },
  {
    "t": 23463996,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23464497,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23465110,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23467644,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23469009,
    "command": "send to channel",
    "from": "#1",
    "to": "#19",
    "ch": "#4",
    "value": "133",
    "duration": 81080
  },
  {
    "t": 23469399,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 23615487,
    "command": "block goroutine",
    "name": "#40"
  },
  {
    "t": 23724030,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23725674,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23726091,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 23729907,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23732163,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23795278,
    "command": "block goroutine",
    "name": "#25"
  },
  {
    "t": 23797506,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23798175,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23803745,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23805723,
    "command": "block goroutine",
    "name": "#36"
  },
  {
    "t": 23807227,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23813104,
    "command": "send to channel",
    "from": "#1",
    "to": "#40",
    "ch": "#4",
    "value": "134",
    "duration": 16071
  },
  {
    "t": 23821515,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23822657,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 23826222,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23828061,
    "command": "unblock goroutine",
    "name": "#40"
  },
  {
    "t": 23828785,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23892373,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23892902,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23893376,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23896077,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23896746,
    "command": "send to channel",
    "from": "#1",
    "to": "#25",
    "ch": "#4",
    "value": "135",
    "duration": 20500
  },
  {
    "t": 23902261,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23902734,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 23906216,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23908528,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23916243,
    "command": "unblock goroutine",
    "name": "#25"
  },
  {
    "t": 23975570,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23976071,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23976739,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 23979246,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 23979831,
    "command": "send to channel",
    "from": "#1",
    "to": "#36",
    "ch": "#4",
    "value": "136",
    "duration": 21503
  },
  {
    "t": 23985262,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23985903,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 23989329,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 23991557,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 24000554,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 24029214,
    "command": "block goroutine",
    "name": "#24"
  },
  {
    "t": 24060549,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 24061412,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 24062109,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 24064950,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 24065841,
    "command": "send to channel",
    "from": "#1",
    "to": "#24",
    "ch": "#4",
    "value": "137",
    "duration": 47043
  },
  {
    "t": 24072163,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 24072804,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 24076202,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 24078430,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 24112160,
    "command": "unblock goroutine",
    "name": "#24"
  },
  {
    "t": 24165805,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 24166362,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 24167003,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 24169509,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 24170846,
    "command": "send to channel",
    "from": "#1",
    "to": "#30",
    "ch": "#4",
    "value": "138",
    "duration": 26182
  },
  {
    "t": 24171180,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 24624793,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 24629695,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 24630864,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 24637661,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 24640919,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 24648690,
    "command": "block goroutine",
    "name": "#26"
  },
  {
    "t": 24703115,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 24703978,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 24707766,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 24710022,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 24711248,
    "command": "send to channel",
    "from": "#1",
    "to": "#26",
    "ch": "#4",
    "value": "139",
    "duration": 28772
  },
  {
    "t": 24719019,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 24719743,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 24723642,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 24726261,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 24738794,
    "command": "unblock goroutine",
    "name": "#26"
  },
  {
    "t": 24767594,
    "command": "block goroutine",
    "name": "#38"
  },
  {
    "t": 24799152,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 24800377,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 24801491,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 24806115,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 24807368,
    "command": "send to channel",
    "from": "#1",
    "to": "#38",
    "ch": "#4",
    "value": "140",
    "duration": 27352
  },
  {
    "t": 24815334,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 24816170,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 24819930,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 24822743,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 24834135,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 24894743,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 24895829,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 24896832,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 24901845,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 24903516,
    "command": "send to channel",
    "from": "#1",
    "to": "#34",
    "ch": "#4",
    "value": "141",
    "duration": 56291
  },
  {
    "t": 24903962,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 25088961,
    "command": "block goroutine",
    "name": "#17"
  },
  {
    "t": 25217975,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25222070,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25223073,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 25228755,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25229005,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 25232069,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25313734,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25314848,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25320279,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25321755,
    "command": "block goroutine",
    "name": "#19"
  },
  {
    "t": 25323984,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25325460,
    "command": "send to channel",
    "from": "#1",
    "to": "#17",
    "ch": "#4",
    "value": "142",
    "duration": 10278
  },
  {
    "t": 25329471,
    "command": "block goroutine",
    "name": "#33"
  },
  {
    "t": 25332813,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25334261,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 25334985,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 25336963,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25338996,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25352505,
    "command": "block goroutine",
    "name": "#37"
  },
  {
    "t": 25404952,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25406038,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25406985,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25410244,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25411358,
    "command": "send to channel",
    "from": "#1",
    "to": "#21",
    "ch": "#4",
    "value": "143",
    "duration": 20750
  },
  {
    "t": 25416204,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25416789,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 25418990,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25420633,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25423948,
    "command": "block goroutine",
    "name": "#31"
  },
  {
    "t": 25431161,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 25483998,
    "command": "block goroutine",
    "name": "#28"
  },
  {
    "t": 25487731,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25488399,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25488956,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25490795,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25491853,
    "command": "send to channel",
    "from": "#1",
    "to": "#19",
    "ch": "#4",
    "value": "144",
    "duration": 22422
  },
  {
    "t": 25497841,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25498733,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 25500877,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25502381,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25513133,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 25523550,
    "command": "block goroutine",
    "name": "#18"
  },
  {
    "t": 25528034,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 25546556,
    "command": "block goroutine",
    "name": "#35"
  },
  {
    "t": 25568142,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25568532,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25568950,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25570593,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25571540,
    "command": "send to channel",
    "from": "#1",
    "to": "#33",
    "ch": "#4",
    "value": "145",
    "duration": 17575
  },
  {
    "t": 25576052,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25576554,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 25578977,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25580537,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25587918,
    "command": "unblock goroutine",
    "name": "#33"
  },
  {
    "t": 25605075,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 25645462,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25645796,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25646269,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25647913,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25648776,
    "command": "send to channel",
    "from": "#1",
    "to": "#37",
    "ch": "#4",
    "value": "146",
    "duration": 15570
  },
  {
    "t": 25652731,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25653288,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 25655405,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25656965,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25663399,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 25722920,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25723283,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25726653,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25728435,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25729132,
    "command": "send to channel",
    "from": "#1",
    "to": "#31",
    "ch": "#4",
    "value": "147",
    "duration": 12116
  },
  {
    "t": 25733421,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25733811,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 25736039,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25737655,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25740022,
    "command": "unblock goroutine",
    "name": "#31"
  },
  {
    "t": 25774560,
    "command": "block goroutine",
    "name": "#20"
  },
  {
    "t": 25800936,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25801633,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25812412,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25814139,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25814946,
    "command": "send to channel",
    "from": "#1",
    "to": "#28",
    "ch": "#4",
    "value": "148",
    "duration": 11838
  },
  {
    "t": 25818902,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25819737,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 25821854,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25823302,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25825865,
    "command": "unblock goroutine",
    "name": "#28"
  },
  {
    "t": 25890846,
    "command": "block goroutine",
    "name": "#27"
  },
  {
    "t": 25929784,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25931539,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25939978,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25946718,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25948445,
    "command": "send to channel",
    "from": "#1",
    "to": "#18",
    "ch": "#4",
    "value": "149",
    "duration": 26349
  },
  {
    "t": 25957080,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25958194,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 25961369,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 25964099,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 25973513,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 26033313,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26034037,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26034845,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26037157,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26037964,
    "command": "send to channel",
    "from": "#1",
    "to": "#22",
    "ch": "#4",
    "value": "150",
    "duration": 33647
  },
  {
    "t": 26052281,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26052838,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 26055623,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26057601,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26070385,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 26092222,
    "command": "block goroutine",
    "name": "#32"
  },
  {
    "t": 26124531,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26125088,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26136285,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26138569,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26139405,
    "command": "send to channel",
    "from": "#1",
    "to": "#35",
    "ch": "#4",
    "value": "151",
    "duration": 14121
  },
  {
    "t": 26143945,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26144530,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 26147148,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26148930,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26152217,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 26212240,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26212686,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26216251,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26218395,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26219510,
    "command": "send to channel",
    "from": "#1",
    "to": "#23",
    "ch": "#4",
    "value": "152",
    "duration": 13536
  },
  {
    "t": 26224857,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26225609,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 26228228,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26229871,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26232071,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 26245970,
    "command": "block goroutine",
    "name": "#29"
  },
  {
    "t": 26292763,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26293180,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26296551,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26298584,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26299447,
    "command": "send to channel",
    "from": "#1",
    "to": "#20",
    "ch": "#4",
    "value": "153",
    "duration": 13871
  },
  {
    "t": 26304294,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26305046,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 26307636,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26309530,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26312288,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 26372728,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26373118,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26376544,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26378577,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26379329,
    "command": "send to channel",
    "from": "#1",
    "to": "#27",
    "ch": "#4",
    "value": "154",
    "duration": 11281
  },
  {
    "t": 26383312,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26384204,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 26386683,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26388437,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26389635,
    "command": "unblock goroutine",
    "name": "#27"
  },
  {
    "t": 26451831,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26452220,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26455953,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26457902,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26458599,
    "command": "send to channel",
    "from": "#1",
    "to": "#32",
    "ch": "#4",
    "value": "155",
    "duration": 15681
  },
  {
    "t": 26463417,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26464309,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 26466927,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26469294,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26472943,
    "command": "unblock goroutine",
    "name": "#32"
  },
  {
    "t": 26482497,
    "command": "block goroutine",
    "name": "#30"
  },
  {
    "t": 26488151,
    "command": "block goroutine",
    "name": "#40"
  },
  {
    "t": 26501576,
    "command": "block goroutine",
    "name": "#25"
  },
  {
    "t": 26532799,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26533356,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26536698,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26538564,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26539623,
    "command": "send to channel",
    "from": "#1",
    "to": "#29",
    "ch": "#4",
    "value": "156",
    "duration": 13536
  },
  {
    "t": 26544358,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26544859,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 26547366,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26549037,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26552212,
    "command": "unblock goroutine",
    "name": "#29"
  },
  {
    "t": 26593518,
    "command": "block goroutine",
    "name": "#39"
  },
  {
    "t": 26612347,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26612792,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26613294,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26615271,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26616190,
    "command": "send to channel",
    "from": "#1",
    "to": "#30",
    "ch": "#4",
    "value": "157",
    "duration": 21280
  },
  {
    "t": 26620675,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26621176,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 26623739,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26625382,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26636523,
    "command": "unblock goroutine",
    "name": "#30"
  },
  {
    "t": 26692312,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26692730,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26693454,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26695293,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26695933,
    "command": "send to channel",
    "from": "#1",
    "to": "#40",
    "ch": "#4",
    "value": "158",
    "duration": 20611
  },
  {
    "t": 26700139,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26700891,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 26703454,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26705180,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26715653,
    "command": "unblock goroutine",
    "name": "#40"
  },
  {
    "t": 26726154,
    "command": "block goroutine",
    "name": "#38"
  },
  {
    "t": 26777793,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26778823,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26785425,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26788962,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26790076,
    "command": "send to channel",
    "from": "#1",
    "to": "#25",
    "ch": "#4",
    "value": "159",
    "duration": 11587
  },
  {
    "t": 26795201,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26795758,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 26797791,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26799797,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26800409,
    "command": "unblock goroutine",
    "name": "#25"
  },
  {
    "t": 26864137,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26864555,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26866644,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26869345,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26869986,
    "command": "send to channel",
    "from": "#1",
    "to": "#39",
    "ch": "#4",
    "value": "160",
    "duration": 24399
  },
  {
    "t": 26875501,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26875863,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 26879010,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26881099,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26893104,
    "command": "unblock goroutine",
    "name": "#39"
  },
  {
    "t": 26942738,
    "command": "block goroutine",
    "name": "#36"
  },
  {
    "t": 26946470,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26947083,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26947584,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26948977,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26949896,
    "command": "send to channel",
    "from": "#1",
    "to": "#38",
    "ch": "#4",
    "value": "161",
    "duration": 14790
  },
  {
    "t": 26953071,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26953572,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 26955271,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 26956692,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 26963655,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 27040863,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27041309,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27041866,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 27049971,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27050695,
    "command": "send to channel",
    "from": "#1",
    "to": "#36",
    "ch": "#4",
    "value": "162",
    "duration": 20333
  },
  {
    "t": 27056071,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27056600,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 27059803,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27061864,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 27069747,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 27097265,
    "command": "block goroutine",
    "name": "#17"
  },
  {
    "t": 27126205,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27126845,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27127207,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 27128600,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27129408,
    "command": "send to channel",
    "from": "#1",
    "to": "#17",
    "ch": "#4",
    "value": "163",
    "duration": 16294
  },
  {
    "t": 27132806,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27133251,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 27134895,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27136037,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 27145284,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 27201073,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27201380,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27201797,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 27203051,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27203914,
    "command": "send to channel",
    "from": "#1",
    "to": "#24",
    "ch": "#4",
    "value": "164",
    "duration": 38549
  },
  {
    "t": 27204137,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 27329308,
    "command": "block goroutine",
    "name": "#34"
  },
  {
    "t": 27417267,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27419245,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27419830,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 27423228,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27424871,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 27485563,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27485897,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27486120,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 27487429,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27488041,
    "command": "send to channel",
    "from": "#1",
    "to": "#34",
    "ch": "#4",
    "value": "165",
    "duration": 13732
  },
  {
    "t": 27491300,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27491718,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 27493529,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27494643,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 27501188,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 27539207,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 27564776,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27565946,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27571238,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 27575750,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27577533,
    "command": "send to channel",
    "from": "#1",
    "to": "#21",
    "ch": "#4",
    "value": "166",
    "duration": 13787
  },
  {
    "t": 27582825,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27583465,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 27585944,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27588145,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 27590846,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 27651761,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27652123,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27654852,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 27656635,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27658334,
    "command": "send to channel",
    "from": "#1",
    "to": "#26",
    "ch": "#4",
    "value": "167",
    "duration": 29413
  },
  {
    "t": 27658613,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 27775010,
    "command": "block goroutine",
    "name": "#19"
  },
  {
    "t": 27863833,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27866423,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27866952,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 27870712,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27872439,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 27891936,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27893245,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27894053,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 27899456,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 27901100,
    "command": "send to channel",
    "from": "#1",
    "to": "#19",
    "ch": "#4",
    "value": "168",
    "duration": 27296
  },
  {
    "t": 27907088,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27907868,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 27910598,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27912909,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 27926919,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 27992290,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 27993655,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 28000061,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 28005771,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 28026605,
    "command": "send to channel",
    "from": "#1",
    "to": "#37",
    "ch": "#4",
    "value": "169",
    "duration": 268697
  },
  {
    "t": 28027051,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 28489938,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 28493670,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 28494506,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 28500188,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 28503029,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 28570405,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 28571769,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 28578092,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 28583384,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 28585835,
    "command": "send to channel",
    "from": "#1",
    "to": "#33",
    "ch": "#4",
    "value": "170",
    "duration": 131410
  },
  {
    "t": 28586225,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 28758495,
    "command": "block goroutine",
    "name": "#32"
  },
  {
    "t": 28782922,
    "command": "block goroutine",
    "name": "#18"
  },
  {
    "t": 28801333,
    "command": "block goroutine",
    "name": "#28"
  },
  {
    "t": 28887816,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 28903887,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 28907675,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 28908817,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 28914499,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 28917034,
    "command": "block goroutine",
    "name": "#17"
  },
  {
    "t": 28918148,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 28944580,
    "command": "block goroutine",
    "name": "#31"
  },
  {
    "t": 28984299,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 28985441,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 28986332,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 28990008,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 28991373,
    "command": "send to channel",
    "from": "#1",
    "to": "#32",
    "ch": "#4",
    "value": "171",
    "duration": 27352
  },
  {
    "t": 28997835,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 28998504,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 29001289,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29003991,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29017806,
    "command": "unblock goroutine",
    "name": "#32"
  },
  {
    "t": 29080670,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29081951,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29089833,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29095710,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29096964,
    "command": "send to channel",
    "from": "#1",
    "to": "#18",
    "ch": "#4",
    "value": "172",
    "duration": 17073
  },
  {
    "t": 29105988,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29106712,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 29111586,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29113285,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 29114929,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29162919,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 29179965,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29180745,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29181469,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29184199,
    "command": "block goroutine",
    "name": "#29"
  },
  {
    "t": 29184756,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29189017,
    "command": "send to channel",
    "from": "#1",
    "to": "#28",
    "ch": "#4",
    "value": "173",
    "duration": 23230
  },
  {
    "t": 29196036,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29196900,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 29199379,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29201356,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29210798,
    "command": "unblock goroutine",
    "name": "#28"
  },
  {
    "t": 29268426,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29268872,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29269512,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29271880,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29272576,
    "command": "send to channel",
    "from": "#1",
    "to": "#23",
    "ch": "#4",
    "value": "174",
    "duration": 19692
  },
  {
    "t": 29276921,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29277534,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 29280013,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29281879,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29291627,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 29328226,
    "command": "block goroutine",
    "name": "#35"
  },
  {
    "t": 29353962,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29355215,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29355968,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29360452,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29361789,
    "command": "send to channel",
    "from": "#1",
    "to": "#17",
    "ch": "#4",
    "value": "175",
    "duration": 14511
  },
  {
    "t": 29366273,
    "command": "block goroutine",
    "name": "#34"
  },
  {
    "t": 29366914,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29367331,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 29369727,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29371370,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29375409,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 29435515,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29436100,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29440334,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29442089,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29443203,
    "command": "send to channel",
    "from": "#1",
    "to": "#31",
    "ch": "#4",
    "value": "176",
    "duration": 12756
  },
  {
    "t": 29444902,
    "command": "block goroutine",
    "name": "#40"
  },
  {
    "t": 29447130,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29447771,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 29449414,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29450528,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29454762,
    "command": "unblock goroutine",
    "name": "#31"
  },
  {
    "t": 29457380,
    "command": "block goroutine",
    "name": "#20"
  },
  {
    "t": 29496068,
    "command": "block goroutine",
    "name": "#27"
  },
  {
    "t": 29517876,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29518907,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29524310,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29528043,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29529324,
    "command": "send to channel",
    "from": "#1",
    "to": "#22",
    "ch": "#4",
    "value": "177",
    "duration": 11754
  },
  {
    "t": 29533446,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29533920,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 29535507,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29536705,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29540493,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 29594890,
    "command": "block goroutine",
    "name": "#30"
  },
  {
    "t": 29600767,
    "command": "block goroutine",
    "name": "#36"
  },
  {
    "t": 29602354,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29603301,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29604220,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29607201,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29608036,
    "command": "send to channel",
    "from": "#1",
    "to": "#29",
    "ch": "#4",
    "value": "178",
    "duration": 17102
  },
  {
    "t": 29614164,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29615250,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 29618007,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29619734,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29624247,
    "command": "unblock goroutine",
    "name": "#29"
  },
  {
    "t": 29625918,
    "command": "block goroutine",
    "name": "#39"
  },
  {
    "t": 29685467,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29685801,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29686219,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29687918,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29688837,
    "command": "send to channel",
    "from": "#1",
    "to": "#35",
    "ch": "#4",
    "value": "179",
    "duration": 16879
  },
  {
    "t": 29692208,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29692904,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 29694436,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29695522,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29704908,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 29759890,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29760141,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29760586,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29761728,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29762230,
    "command": "send to channel",
    "from": "#1",
    "to": "#34",
    "ch": "#4",
    "value": "180",
    "duration": 11976
  },
  {
    "t": 29764653,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29765015,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 29766519,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29767577,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29773566,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 29807713,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 29833422,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29834034,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29836959,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29838769,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29839744,
    "command": "send to channel",
    "from": "#1",
    "to": "#40",
    "ch": "#4",
    "value": "181",
    "duration": 9247
  },
  {
    "t": 29842892,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29843560,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 29845176,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29846290,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29848100,
    "command": "unblock goroutine",
    "name": "#40"
  },
  {
    "t": 29878599,
    "command": "block goroutine",
    "name": "#38"
  },
  {
    "t": 29909711,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29910491,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29913471,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29915086,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29916033,
    "command": "send to channel",
    "from": "#1",
    "to": "#20",
    "ch": "#4",
    "value": "182",
    "duration": 15319
  },
  {
    "t": 29919431,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29919961,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 29921548,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29922634,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29930071,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 29986724,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29986975,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29989509,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 29990707,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 29991153,
    "command": "send to channel",
    "from": "#1",
    "to": "#27",
    "ch": "#4",
    "value": "183",
    "duration": 13285
  },
  {
    "t": 29994049,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29994606,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 29996305,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 29997419,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30003101,
    "command": "unblock goroutine",
    "name": "#27"
  },
  {
    "t": 30061481,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30061899,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30064851,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30066773,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30067553,
    "command": "send to channel",
    "from": "#1",
    "to": "#30",
    "ch": "#4",
    "value": "184",
    "duration": 11058
  },
  {
    "t": 30070868,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30071452,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 30072957,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30074154,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30077719,
    "command": "unblock goroutine",
    "name": "#30"
  },
  {
    "t": 30099584,
    "command": "block goroutine",
    "name": "#25"
  },
  {
    "t": 30137492,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30137854,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30140611,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30142394,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30143118,
    "command": "send to channel",
    "from": "#1",
    "to": "#36",
    "ch": "#4",
    "value": "185",
    "duration": 11698
  },
  {
    "t": 30146377,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30146822,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 30148382,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30149580,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30154008,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 30212110,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30212360,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30215229,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30216399,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30216984,
    "command": "send to channel",
    "from": "#1",
    "to": "#39",
    "ch": "#4",
    "value": "186",
    "duration": 11419
  },
  {
    "t": 30219602,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30220159,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 30221747,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30222916,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30227763,
    "command": "unblock goroutine",
    "name": "#39"
  },
  {
    "t": 30283162,
    "command": "block goroutine",
    "name": "#19"
  },
  {
    "t": 30287786,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30288287,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30288928,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30291267,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30292159,
    "command": "send to channel",
    "from": "#1",
    "to": "#21",
    "ch": "#4",
    "value": "187",
    "duration": 15263
  },
  {
    "t": 30297172,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30297813,
    "command": "block goroutine",
    "name": "#24"
  },
  {
    "t": 30298091,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 30300905,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30302938,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30306336,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 30364743,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30365078,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30368002,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30369618,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30370314,
    "command": "send to channel",
    "from": "#1",
    "to": "#38",
    "ch": "#4",
    "value": "188",
    "duration": 13787
  },
  {
    "t": 30373294,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30373656,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 30375300,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30376497,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30383043,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 30441116,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30441367,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30443929,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30445127,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30445545,
    "command": "send to channel",
    "from": "#1",
    "to": "#25",
    "ch": "#4",
    "value": "189",
    "duration": 9609
  },
  {
    "t": 30448107,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30448469,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 30449917,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30451087,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30454179,
    "command": "unblock goroutine",
    "name": "#25"
  },
  {
    "t": 30513701,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30513951,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30516709,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30517962,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30518380,
    "command": "send to channel",
    "from": "#1",
    "to": "#19",
    "ch": "#4",
    "value": "190",
    "duration": 10890
  },
  {
    "t": 30520998,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30521527,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 30523031,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30524062,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30528101,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 30586675,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30586926,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30589795,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30591020,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30591382,
    "command": "send to channel",
    "from": "#1",
    "to": "#24",
    "ch": "#4",
    "value": "191",
    "duration": 8468
  },
  {
    "t": 30594056,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30594558,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 30596006,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30597120,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30598819,
    "command": "unblock goroutine",
    "name": "#24"
  },
  {
    "t": 30660179,
    "command": "block goroutine",
    "name": "#26"
  },
  {
    "t": 30661906,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30662602,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30666474,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30668869,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30669983,
    "command": "send to channel",
    "from": "#1",
    "to": "#26",
    "ch": "#4",
    "value": "192",
    "duration": 17798
  },
  {
    "t": 30675414,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30683018,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 30685859,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 30686305,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30686583,
    "command": "unblock goroutine",
    "name": "#26"
  },
  {
    "t": 30687001,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 30688840,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 30689675,
    "command": "send to channel",
    "from": "#1",
    "to": "#37",
    "ch": "#4",
    "value": "193",
    "duration": 157480
  },
  {
    "t": 30689954,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 31037391,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 31040315,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 31040956,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 31052013,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 31052932,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 31053657,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 31056442,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 31057500,
    "command": "send to channel",
    "from": "#1",
    "to": "#18",
    "ch": "#4",
    "value": "194",
    "duration": 352284
  },
  {
    "t": 31057974,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 31536988,
    "command": "block goroutine",
    "name": "#34"
  },
  {
    "t": 31597986,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 31600910,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 31601607,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 31605422,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 31607623,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 31669512,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 31670041,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 31670320,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 31671824,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 31672659,
    "command": "send to channel",
    "from": "#1",
    "to": "#34",
    "ch": "#4",
    "value": "195",
    "duration": 20751
  },
  {
    "t": 31676224,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 31676670,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 31678313,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 31679539,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 31692212,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 31722404,
    "command": "block goroutine",
    "name": "#28"
  },
  {
    "t": 31746553,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 31746971,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 31750007,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 31751761,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 31752486,
    "command": "send to channel",
    "from": "#1",
    "to": "#28",
    "ch": "#4",
    "value": "196",
    "duration": 9358
  },
  {
    "t": 31755828,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 31756218,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 31757889,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 31759142,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 31761399,
    "command": "unblock goroutine",
    "name": "#28"
  },
  {
    "t": 31822174,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 31822508,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 31824235,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 31826714,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 31827911,
    "command": "send to channel",
    "from": "#1",
    "to": "#33",
    "ch": "#4",
    "value": "197",
    "duration": 51584
  },
  {
    "t": 31828245,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 31973610,
    "command": "block goroutine",
    "name": "#32"
  },
  {
    "t": 31978818,
    "command": "block goroutine",
    "name": "#17"
  },
  {
    "t": 31983553,
    "command": "block goroutine",
    "name": "#40"
  },
  {
    "t": 32058422,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 32060511,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 32060845,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 32063435,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 32064828,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 32133708,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 32135184,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 32136577,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 32142872,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 32144571,
    "command": "send to channel",
    "from": "#1",
    "to": "#32",
    "ch": "#4",
    "value": "198",
    "duration": 16795
  },
  {
    "t": 32152982,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 32154180,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 32157494,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 32159834,
    "command": "unblock goroutine",
    "name": "#32"
  },
  {
    "t": 32160503,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 32221667,
    "command": "block goroutine",
    "name": "#29"
  },
  {
    "t": 32235288,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 32237349,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 32238518,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 32245565,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 32247209,
    "command": "send to channel",
    "from": "#1",
    "to": "#17",
    "ch": "#4",
    "value": "199",
    "duration": 36570
  },
  {
    "t": 32257570,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 32258740,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 32263475,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 32267012,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 32282944,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 32310073,
    "command": "block goroutine",
    "name": "#35"
  },
  {
    "t": 32359539,
    "command": "block goroutine",
    "name": "#24"
  },
  {
    "t": 32431595,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 32589660,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 32624142,
    "command": "block goroutine",
    "name": "#31"
  },
  {
    "t": 32640714,
    "command": "block goroutine",
    "name": "#20"
  },
  {
    "t": 32677424,
    "command": "block goroutine",
    "name": "#27"
  },
  {
    "t": 32701684,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 32809001,
    "command": "block goroutine",
    "name": "#19"
  },
  {
    "t": 32816522,
    "command": "block goroutine",
    "name": "#39"
  },
  {
    "t": 32845377,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 32846714,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 32853705,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 32859415,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 32861086,
    "command": "send to channel",
    "from": "#1",
    "to": "#40",
    "ch": "#4",
    "value": "200",
    "duration": 19386
  },
  {
    "t": 32871921,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 32872729,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 32875681,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 32878522,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 32879636,
    "command": "unblock goroutine",
    "name": "#40"
  },
  {
    "t": 32946567,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 32947374,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 32951469,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 32953697,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 32954588,
    "command": "send to channel",
    "from": "#1",
    "to": "#29",
    "ch": "#4",
    "value": "201",
    "duration": 11392
  },
  {
    "t": 32959574,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 32960103,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 32962749,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 32964365,
    "command": "unblock goroutine",
    "name": "#29"
  },
  {
    "t": 32964699,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 32971272,
    "command": "block goroutine",
    "name": "#26"
  },
  {
    "t": 33029652,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33030098,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33033635,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33035835,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33036671,
    "command": "send to channel",
    "from": "#1",
    "to": "#35",
    "ch": "#4",
    "value": "202",
    "duration": 30833
  },
  {
    "t": 33050820,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33051823,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 33054580,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33056307,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33066696,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 33125577,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33126134,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33126886,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33129727,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33130786,
    "command": "send to channel",
    "from": "#1",
    "to": "#24",
    "ch": "#4",
    "value": "203",
    "duration": 26321
  },
  {
    "t": 33136356,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33137136,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 33139726,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33141704,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33155714,
    "command": "unblock goroutine",
    "name": "#24"
  },
  {
    "t": 33159558,
    "command": "block goroutine",
    "name": "#30"
  },
  {
    "t": 33213230,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33214149,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33220110,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33224928,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33226405,
    "command": "send to channel",
    "from": "#1",
    "to": "#23",
    "ch": "#4",
    "value": "204",
    "duration": 16210
  },
  {
    "t": 33234203,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33235652,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 33240610,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33241362,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 33243896,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33299129,
    "command": "block goroutine",
    "name": "#25"
  },
  {
    "t": 33310381,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33311495,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33314754,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33319183,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33320380,
    "command": "send to channel",
    "from": "#1",
    "to": "#21",
    "ch": "#4",
    "value": "205",
    "duration": 19163
  },
  {
    "t": 33332413,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33333137,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 33337761,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33338958,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 33340964,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33407811,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33408897,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33414300,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33418673,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33420428,
    "command": "send to channel",
    "from": "#1",
    "to": "#31",
    "ch": "#4",
    "value": "206",
    "duration": 12979
  },
  {
    "t": 33425748,
    "command": "block goroutine",
    "name": "#36"
  },
  {
    "t": 33428505,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33429341,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 33432293,
    "command": "unblock goroutine",
    "name": "#31"
  },
  {
    "t": 33434577,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33437836,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33441039,
    "command": "block goroutine",
    "name": "#37"
  },
  {
    "t": 33502371,
    "command": "block goroutine",
    "name": "#38"
  },
  {
    "t": 33504154,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33505296,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33510727,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33515072,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33516325,
    "command": "send to channel",
    "from": "#1",
    "to": "#20",
    "ch": "#4",
    "value": "207",
    "duration": 32477
  },
  {
    "t": 33524960,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33526241,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 33530781,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33534179,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33547855,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 33606402,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33607488,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33608463,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33613281,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33614340,
    "command": "send to channel",
    "from": "#1",
    "to": "#27",
    "ch": "#4",
    "value": "208",
    "duration": 28382
  },
  {
    "t": 33622417,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33623253,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 33628015,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33631135,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33642081,
    "command": "unblock goroutine",
    "name": "#27"
  },
  {
    "t": 33696840,
    "command": "block goroutine",
    "name": "#18"
  },
  {
    "t": 33703803,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33704750,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33705669,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33710683,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33711964,
    "command": "send to channel",
    "from": "#1",
    "to": "#22",
    "ch": "#4",
    "value": "209",
    "duration": 30889
  },
  {
    "t": 33720515,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33721239,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 33725863,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33729094,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33741962,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 33802709,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33803684,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33804798,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33810006,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33811427,
    "command": "send to channel",
    "from": "#1",
    "to": "#19",
    "ch": "#4",
    "value": "210",
    "duration": 29747
  },
  {
    "t": 33819504,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33820340,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 33824629,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33827943,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33840338,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 33900918,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33901809,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33907185,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 33912421,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 33913703,
    "command": "send to channel",
    "from": "#1",
    "to": "#39",
    "ch": "#4",
    "value": "211",
    "duration": 21001
  },
  {
    "t": 33926013,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33926738,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 33931668,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 33933701,
    "command": "unblock goroutine",
    "name": "#39"
  },
  {
    "t": 33935205,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34004642,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34005561,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34012079,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34017260,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34018402,
    "command": "send to channel",
    "from": "#1",
    "to": "#26",
    "ch": "#4",
    "value": "212",
    "duration": 34537
  },
  {
    "t": 34026841,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34027816,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 34032300,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34035642,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34051519,
    "command": "unblock goroutine",
    "name": "#26"
  },
  {
    "t": 34122432,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34123518,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34124549,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34129952,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34131206,
    "command": "send to channel",
    "from": "#1",
    "to": "#30",
    "ch": "#4",
    "value": "213",
    "duration": 27240
  },
  {
    "t": 34139645,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34140174,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 34143155,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34145271,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34157332,
    "command": "unblock goroutine",
    "name": "#30"
  },
  {
    "t": 34212954,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34213400,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34216575,
    "command": "block goroutine",
    "name": "#28"
  },
  {
    "t": 34217605,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34219611,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34221143,
    "command": "send to channel",
    "from": "#1",
    "to": "#25",
    "ch": "#4",
    "value": "214",
    "duration": 9943
  },
  {
    "t": 34225432,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34226073,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 34228663,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34230251,
    "command": "unblock goroutine",
    "name": "#25"
  },
  {
    "t": 34230501,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34294368,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34294786,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34298184,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34300189,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34300858,
    "command": "send to channel",
    "from": "#1",
    "to": "#36",
    "ch": "#4",
    "value": "215",
    "duration": 17324
  },
  {
    "t": 34305481,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34306651,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 34309130,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34310913,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34316929,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 34377453,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34377871,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34381380,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34383330,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34384333,
    "command": "send to channel",
    "from": "#1",
    "to": "#37",
    "ch": "#4",
    "value": "216",
    "duration": 12144
  },
  {
    "t": 34388789,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34389318,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 34391964,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34393831,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34395613,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 34461262,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34461987,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34467334,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34471763,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34472766,
    "command": "send to channel",
    "from": "#1",
    "to": "#38",
    "ch": "#4",
    "value": "217",
    "duration": 22115
  },
  {
    "t": 34485272,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34486302,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 34491121,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34494045,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 34494519,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34563232,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34564123,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34569638,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34574457,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34575766,
    "command": "send to channel",
    "from": "#1",
    "to": "#18",
    "ch": "#4",
    "value": "218",
    "duration": 16684
  },
  {
    "t": 34584289,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34585041,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 34590082,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34591196,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 34594121,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34662305,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34663140,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34664031,
    "command": "block goroutine",
    "name": "#34"
  },
  {
    "t": 34667819,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34670772,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34672081,
    "command": "send to channel",
    "from": "#1",
    "to": "#28",
    "ch": "#4",
    "value": "219",
    "duration": 8328
  },
  {
    "t": 34677178,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34677791,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 34679183,
    "command": "unblock goroutine",
    "name": "#28"
  },
  {
    "t": 34680604,
    "command": "block goroutine",
    "name": "#32"
  },
  {
    "t": 34681050,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34682888,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34746476,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34746894,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34747451,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34749428,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34750459,
    "command": "send to channel",
    "from": "#1",
    "to": "#34",
    "ch": "#4",
    "value": "220",
    "duration": 21697
  },
  {
    "t": 34755333,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34755918,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 34758425,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34760124,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34771237,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 34826330,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34826748,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34827584,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34829673,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34830257,
    "command": "send to channel",
    "from": "#1",
    "to": "#32",
    "ch": "#4",
    "value": "221",
    "duration": 8830
  },
  {
    "t": 34834491,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34835048,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 34838140,
    "command": "unblock goroutine",
    "name": "#32"
  },
  {
    "t": 34841343,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34845604,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34906547,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 34907326,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34911421,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 34914345,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 34916546,
    "command": "send to channel",
    "from": "#1",
    "to": "#33",
    "ch": "#4",
    "value": "222",
    "duration": 66122
  },
  {
    "t": 34916991,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 35066032,
    "command": "block goroutine",
    "name": "#40"
  },
  {
    "t": 35114998,
    "command": "block goroutine",
    "name": "#17"
  },
  {
    "t": 35164910,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35167110,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35167528,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 35170648,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35172347,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 35222092,
    "command": "block goroutine",
    "name": "#29"
  },
  {
    "t": 35234375,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35234821,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35235211,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 35236826,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35237522,
    "command": "send to channel",
    "from": "#1",
    "to": "#40",
    "ch": "#4",
    "value": "223",
    "duration": 15737
  },
  {
    "t": 35242035,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35242564,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 35244513,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35245878,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 35252479,
    "command": "unblock goroutine",
    "name": "#40"
  },
  {
    "t": 35312140,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35312502,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35312892,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 35314870,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35315483,
    "command": "send to channel",
    "from": "#1",
    "to": "#17",
    "ch": "#4",
    "value": "224",
    "duration": 13926
  },
  {
    "t": 35319382,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35319772,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 35321750,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35323198,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 35328852,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 35390240,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35390741,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35391242,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 35393972,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35394557,
    "command": "send to channel",
    "from": "#1",
    "to": "#29",
    "ch": "#4",
    "value": "225",
    "duration": 25569
  },
  {
    "t": 35400100,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35400685,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 35404083,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35406339,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 35418817,
    "command": "unblock goroutine",
    "name": "#29"
  },
  {
    "t": 35473158,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35473659,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35474244,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 35477029,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35477781,
    "command": "send to channel",
    "from": "#1",
    "to": "#23",
    "ch": "#4",
    "value": "226",
    "duration": 19943
  },
  {
    "t": 35478116,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 35719071,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35722274,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35723082,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 35727455,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35730825,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 35739431,
    "command": "block goroutine",
    "name": "#24"
  },
  {
    "t": 35782241,
    "command": "block goroutine",
    "name": "#35"
  },
  {
    "t": 35792825,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35793550,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35794246,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 35797031,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35798257,
    "command": "send to channel",
    "from": "#1",
    "to": "#24",
    "ch": "#4",
    "value": "227",
    "duration": 27296
  },
  {
    "t": 35805081,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35805833,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 35809259,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35811431,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 35824968,
    "command": "unblock goroutine",
    "name": "#24"
  },
  {
    "t": 35877832,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35878334,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35879086,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 35881565,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35882261,
    "command": "send to channel",
    "from": "#1",
    "to": "#35",
    "ch": "#4",
    "value": "228",
    "duration": 20165
  },
  {
    "t": 35887887,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35888528,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 35891870,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35893987,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 35901647,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 35959553,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 35959998,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35963369,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 35965820,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35966572,
    "command": "send to channel",
    "from": "#1",
    "to": "#21",
    "ch": "#4",
    "value": "229",
    "duration": 224271
  },
  {
    "t": 35966962,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 36246243,
    "command": "block goroutine",
    "name": "#38"
  },
  {
    "t": 36351694,
    "command": "block goroutine",
    "name": "#39"
  },
  {
    "t": 36369631,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 36407344,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 36409823,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36410407,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 36413137,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36415560,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 36478146,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36478647,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 36479093,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 36480597,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 36481599,
    "command": "send to channel",
    "from": "#1",
    "to": "#38",
    "ch": "#4",
    "value": "230",
    "duration": 15626
  },
  {
    "t": 36485192,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36485666,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 36487449,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36488646,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 36494969,
    "command": "block goroutine",
    "name": "#19"
  },
  {
    "t": 36496417,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 36550257,
    "command": "block goroutine",
    "name": "#26"
  },
  {
    "t": 36554268,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36554908,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 36555326,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 36556830,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 36557471,
    "command": "send to channel",
    "from": "#1",
    "to": "#39",
    "ch": "#4",
    "value": "231",
    "duration": 5793
  },
  {
    "t": 36561036,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36561482,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 36562429,
    "command": "unblock goroutine",
    "name": "#39"
  },
  {
    "t": 36563793,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36565075,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 36614458,
    "command": "block goroutine",
    "name": "#31"
  },
  {
    "t": 36628050,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36628384,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 36628858,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 36630195,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 36630807,
    "command": "send to channel",
    "from": "#1",
    "to": "#22",
    "ch": "#4",
    "value": "232",
    "duration": 18829
  },
  {
    "t": 36633815,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36634400,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 36636044,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36637130,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 36648355,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 36701637,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36701944,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 36702445,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 36703670,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 36704060,
    "command": "send to channel",
    "from": "#1",
    "to": "#19",
    "ch": "#4",
    "value": "233",
    "duration": 13760
  },
  {
    "t": 36706651,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36707096,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 36708740,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36709854,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 36717402,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 36733473,
    "command": "block goroutine",
    "name": "#20"
  },
  {
    "t": 36750324,
    "command": "block goroutine",
    "name": "#37"
  },
  {
    "t": 36775002,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36775336,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 36775726,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 36776979,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 36777592,
    "command": "send to channel",
    "from": "#1",
    "to": "#26",
    "ch": "#4",
    "value": "234",
    "duration": 14846
  },
  {
    "t": 36780962,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36781491,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 36783135,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36784249,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 36789040,
    "command": "block goroutine",
    "name": "#18"
  },
  {
    "t": 36791156,
    "command": "unblock goroutine",
    "name": "#26"
  },
  {
    "t": 36854187,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36854466,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 36856917,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 36858226,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 36858867,
    "command": "send to channel",
    "from": "#1",
    "to": "#31",
    "ch": "#4",
    "value": "235",
    "duration": 10862
  },
  {
    "t": 36861541,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36861819,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 36863490,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36864660,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 36868699,
    "command": "unblock goroutine",
    "name": "#31"
  },
  {
    "t": 36900563,
    "command": "block goroutine",
    "name": "#27"
  },
  {
    "t": 36927747,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36928332,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 36931507,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 36932844,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 36933485,
    "command": "send to channel",
    "from": "#1",
    "to": "#20",
    "ch": "#4",
    "value": "236",
    "duration": 9943
  },
  {
    "t": 36936632,
    "command": "block goroutine",
    "name": "#25"
  },
  {
    "t": 36936855,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36937384,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 36939250,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 36940643,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 36942175,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 37004955,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 37005289,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 37007908,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 37009161,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 37009802,
    "command": "send to channel",
    "from": "#1",
    "to": "#37",
    "ch": "#4",
    "value": "237",
    "duration": 12311
  },
  {
    "t": 37012475,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 37013005,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 37014704,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 37015846,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 37019829,
    "command": "block goroutine",
    "name": "#36"
  },
  {
    "t": 37021277,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 37080492,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 37080854,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 37081244,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 37083305,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 37084030,
    "command": "send to channel",
    "from": "#1",
    "to": "#18",
    "ch": "#4",
    "value": "238",
    "duration": 19497
  },
  {
    "t": 37088792,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 37089489,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 37092163,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 37093973,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 37102691,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 37117899,
    "command": "block goroutine",
    "name": "#34"
  },
  {
    "t": 37160179,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 37160625,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 37160987,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 37162742,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 37163466,
    "command": "send to channel",
    "from": "#1",
    "to": "#27",
    "ch": "#4",
    "value": "239",
    "duration": 47963
  },
  {
    "t": 37169120,
    "command": "unblock goroutine",
    "name": "#25"
  },
  {
    "t": 37195747,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 37198171,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 37200928,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 37207362,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 37209312,
    "command": "stop goroutine",
    "name": "#34"
  },
  {
    "t": 37210872,
    "command": "unblock goroutine",
    "name": "#27"
  },
  {
    "t": 37346348,
    "command": "stop goroutine",
    "name": "#30"
  },
  {
    "t": 37346627,
    "command": "unblock goroutine",
    "name": "#25"
  },
  {
    "t": 37350526,
    "command": "stop goroutine",
    "name": "#25"
  },
  {
    "t": 37355289,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 37357823,
    "command": "stop goroutine",
    "name": "#36"
  },
  {
    "t": 37418320,
    "command": "stop goroutine",
    "name": "#29"
  },
  {
    "t": 37543129,
    "command": "stop goroutine",
    "name": "#32"
  },
  {
    "t": 37556916,
    "command": "stop goroutine",
    "name": "#40"
  },
  {
    "t": 37581315,
    "command": "stop goroutine",
    "name": "#28"
  },
  {
    "t": 37779433,
    "command": "stop goroutine",
    "name": "#23"
  },
  {
    "t": 39960815,
    "command": "stop goroutine",
    "name": "#17"
  },
  {
    "t": 39999057,
    "command": "stop goroutine",
    "name": "#33"
  },
  {
    "t": 40790190,
    "command": "stop goroutine",
    "name": "#24"
  },
  {
    "t": 41373708,
    "command": "stop goroutine",
    "name": "#35"
  },
  {
    "t": 41520549,
    "command": "stop goroutine",
    "name": "#21"
  },
  {
    "t": 41533166,
    "command": "stop goroutine",
    "name": "#39"
  },
  {
    "t": 41670732,
    "command": "stop goroutine",
    "name": "#27"
  },
  {
    "t": 41803506,
    "command": "stop goroutine",
    "name": "#19"
  },
  {
    "t": 41895978,
    "command": "stop goroutine",
    "name": "#38"
  },
  {
    "t": 41983492,
    "command": "stop goroutine",
    "name": "#22"
  },
  {
    "t": 42007167,
    "command": "stop goroutine",
    "name": "#18"
  },
  {
    "t": 42170858,
    "command": "stop goroutine",
    "name": "#31"
  },
  {
    "t": 42250322,
    "command": "stop goroutine",
    "name": "#20"
  },
  {
    "t": 42532973,
    "command": "stop goroutine",
    "name": "#26"
  },
  {
    "t": 42726245,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 42733988,
    "command": "stop goroutine",
    "name": "#37"
  },
  {
    "t": 42735380,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 42756047,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 42756057,
    "command": "stop goroutine",
    "name": "#1"
  }
];

	window.samples.gomaxprocs24 = {

		initialize: function(canvas, options) {
			var instance = { active: false };
			var params = {
				camera: "perspective",
				allCaps: false,
				speed: 3.0,
				angle: 90,
				angle2: 360/24,
				zoom: 1.0,
				autoAngle: false,
				autoRotate: true,
				distance: 50,
				zoom: 2.0,
				totalTime: 50,
				cameraPos: {x: 100, y: 60, z: 100}
			};
			initScene(canvas, options, instance, data, params);
			return instance;
		}
	};
})();

