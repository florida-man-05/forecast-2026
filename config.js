// ---------------------------------------------------------------------------
// YOUR SITE SETTINGS. This is the only file you need to edit (plus your CSVs).
// Edit it on github.com: open this file, click the pencil icon, change the
// text between the quotation marks, then click "Commit changes".
// ---------------------------------------------------------------------------

window.SITE_CONFIG = {

  // The name shown at the top of your site. A nickname or made-up forecaster
  // name is fine and recommended. Do not put your real name, email, photo,
  // or anything else that identifies you on this site.
  forecaster_name: "florida_man_05",

  // One short line under the name (optional).
  tagline: "My 2026 U.S. Congressional Midterms forecast",

  // A plain-language description of YOUR model, in your own words. Each line in
  // quotes is one paragraph, followed by a comma. Two or three short paragraphs:
  // what your forecast is built from, how you set the national environment,
  // and how you handled uncertainty. Until you fill this in, your site shows a
  // reminder in this spot.
  //
  // For example, the class model could be described like this (describe your
  // own model):
  //   "A fundamentals-only model (no polls). Each race's predicted Democratic share combines the district's partisan lean, incumbency, and a forecast of the national House vote from presidential approval, gas prices, income and the midterm penalty.",
  //   "Uncertainty combines one national error shared by every race with a separate error for each race. Seat totals come from 10,000 simulated elections.",
  method: [
    "I built two separate models for the House and Senate. Both are fit on data from 2012-2024.",
    "The House Model: Uses pvi + nat_d + inc_d + n_other + inc_d:after_2016 + n_other*pvi as its predictors.",
    "The Senate Model: Uses pvi + nat_d + inc_d + inc_d:after_2016 + spend_gap as its predictors.",
    "pvi = Partisan Value Index; nat_d = the national environment number; inc_d = incumbency status of contest;",
    "n_other = number of 3rd party candidates in the contest; after_2016 = indicator of being in 2018 and beyond;",
    "spend_gap = log proportion of democratic spending and republican spending in contest."
  ],

  // Your data files. Leave these alone unless you renamed your files.
  forecast_file: "forecast.csv",
  sims_file: "seat_sims.csv",

  // Course links. Leave these as they are.
  links: {
    class_forecast: "https://kevinmdeluca.com/forecast/class/",
    tracker: "https://kevinmdeluca.com/forecast/",
    gallery: "https://kevin-deluca-polisci.github.io/plsc2219-forecasts/gallery.html"
  }
};
