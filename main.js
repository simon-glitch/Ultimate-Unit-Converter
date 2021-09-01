alert("javscript!");

var units;
units = {
  types: {},
  el: document.querySelector("#units"),
  newType: function (name) {
    let type_obj = {
      name,
      forms: {}
    };
    this.types[name] = type_obj;
    return type_obj;
  },
  defaultType: "number"
};
class Unit {
  constructor(options) {
    let type =
        options.type ||
        options.type_name ||
        options.typeName ||
        options.class_name ||
        options.className ||
        options["class"] ||
        units.defaultType,
      name = options.type;
    if (!name) {
      console.error("Unit needs a name, and " + name + "is invalid!");
    }
    let plural_name =
        options.plural_name ||
        options.pluralName ||
        name.replace(/(\S+|)/, "&$s"),
      dims =
        options.representation ||
        options.equation ||
        options.formula ||
        options.representations ||
        options.equations ||
        options.formulas ||
        options.dim ||
        options.dims ||
        options.dimr ||
        options.dime ||
        options.dimf ||
        options.dimmension ||
        options.dimmensions ||
        options.dimmensional_representations ||
        options.dimmensional_equations ||
        options.dimmensional_formulas ||
        options.dimmensionalRepresentations ||
        options.dimmensionalEquations ||
        options.dimmensionalFormulas ||
        options.dimmensional_representation ||
        options.dimmensional_equation ||
        options.dimmensional_formula ||
        options.dimmensionalRepresentation ||
        options.dimmensionalEquation ||
        options.dimmensionalFormula,
      abs_val =
        options.val ||
        options.value ||
        options.abs ||
        options.absolute ||
        options.abs_val ||
        options.absVal ||
        options.absolute_value ||
        options.absoluteValue ||
        options.mult ||
        options.multi ||
        options.mulltiplier ||
        1,
      about =
        options.about ||
        options.about_info ||
        options.aboutInfo ||
        options.info ||
        options.desc ||
        options.description ||
        "",
      alts =
        options.alt ||
        options.alts ||
        options.alternate ||
        options.alternates ||
        options.alternate_name ||
        options.alternateName ||
        options.alternate_names ||
        options.alternateNames ||
        options.val ||
        [];
    // that was ALOT of let declarations
    // now, some variables need to be converted into arrays if they are not ALREADY arrays
    if (!Array.isArray(alts)) alts = [alts];
    if (!Array.isArray(dims)) dims = [dims];

    let type_obj = units.types[type];
    if (!type_obj) {
      type_obj = units.newType(type);
    }
    type_obj.forms[name] = this;
    this.name = name;
    this.plural_name = plural_name;
    this.abs_val = abs_val;
    this.dims = dims;
    this.about = about;
    this.alts = alts;
  }
}
// the SI units are the basis for all other units
new Unit({
  type: "length",
  name: "meter"
});
new Unit({
  type: "time",
  name: "second"
});
new Unit({
  type: "mass",
  name: "gram"
});
new Unit({
  type: "energy",
  name: "joule"
});
new Unit({
  type: "speed",
  name: "meter per second"
});
new Unit({
  type: "volume",
  name: "liter"
});
new Unit({
  type: "force",
  name: "newton"
});

units.findUnit = function (name) {
  for (let i in units.types) {
    for (let ii in units.types[i].forms) {
      if (units.types[i].forms[ii].name === name) {
        return units.types[i].forms[ii];
      }
    }
  }
  return null;
};

class converter {
  constructor(unit) {
    this.el = document.createElement("div");
    this.unit = {
      el: document.createElement("div"),
      type_el: document.createElement("div"),
      variant_el: document.createElement("div"),
      amount_el: document.createElement("div"),
      type: unit.type,
      variant: unit.name,
      amount: 1
    };
    this.desc = {
      el: document.createElement("p"),
      val: ""
    };
    this.shift = {
      el: document.createElement("p"),
      up_el: document.createElement("button"),
      down_el: document.createElement("button")
    };
    this.unit.el.appendChild(this.unit.type_el);
    this.unit.el.appendChild(this.unit.variant_el);
    this.unit.el.appendChild(this.unit.amount_el);
    this.shift.el.appendChild(this.shit.up_el);
    this.shift.el.appendChild(this.shit.down_el);

    this.fillEls();
  }
  fillEls() {
    this.unit.type_el.innerText = this.unit.type;
    this.unit.variant_el.innerText = this.unit.name;
    this.unit.amount_el.innerText = this.unit.amount;
    this.shift.up_el.innerText = "^";
    this.shift.down_el.innerText = "v";
  }
}

var nc = new converter(units.types["length"].forms["meter"]);
console.clear();
console.log(nc);
