var AsciiTable = require('ascii-table')

const truthTable = (op, fn) => {
    const tbl = new AsciiTable(`${op}`)
    tbl 
        .setHeading("X", "Y", "Out")
        .addRow(0, 0, fn(0, 0))
        .addRow(0, 1, fn(0, 1))
        .addRow(1, 0, fn(1, 0))
        .addRow(1, 1, fn(1, 1))

    console.log(tbl.toString());
}


//primary operations
const and = (x, y) => x && y ? 1: 0;
const or = (x,y) => x || y ? 1: 0;
const not = x => x ? 0 : 1;

truthTable("AND", and)
truthTable("OR", or)

//secondary operations
const xor = (x, y) => x !== y ? 1: 0
const equiv = (x, y) => x === y ? 1: 0
const imp = (x,y) => x === 1 ? 1 : 0

truthTable("XOR", xor)
truthTable("EQUIV", equiv)
truthTable("IMP", imp)

//opposite operations
const xnor = (x, y) => not(xor(x, y))
const nequiv = (x, y) => not(equiv(x, y))
const nor = (x, y) => not(or(x, y))
const nand = (x, y) => not(and(x, y))

truthTable("XNOR", xnor)
truthTable("NEQUIV", nequiv)
truthTable("NOR", nor)
truthTable("NAND", nand)

