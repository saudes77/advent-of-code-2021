export default class Caller {
  #nextCallIndex = 0;

  call() {
    return this.calls[this.#nextCallIndex++];
  }

  calls = [
    28,
    82,
    77,
    88,
    95,
    55,
    62,
    21,
    99,
    14,
    30,
    9,
    97,
    92,
    94,
    3,
    60,
    22,
    18,
    86,
    78,
    71,
    61,
    43,
    79,
    33,
    65,
    81,
    26,
    49,
    47,
    51,
    0,
    89,
    57,
    75,
    42,
    35,
    80,
    1,
    46,
    83,
    39,
    53,
    40,
    36,
    54,
    70,
    76,
    38,
    50,
    23,
    67,
    2,
    20,
    87,
    37,
    66,
    84,
    24,
    98,
    4,
    7,
    12,
    44,
    10,
    29,
    5,
    48,
    59,
    32,
    41,
    90,
    17,
    56,
    85,
    96,
    93,
    27,
    74,
    45,
    25,
    15,
    6,
    69,
    16,
    19,
    8,
    31,
    13,
    64,
    63,
    34,
    73,
    58,
    91,
    11,
    68,
    72,
    52
  ]
}