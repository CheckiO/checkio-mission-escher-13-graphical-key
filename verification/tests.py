"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""


TESTS = {
    "Basics": [
        {
            "input":[[[1, 6, 7, 2, 4],
                      [0, 4, 9, 5, 3],
                      [7, 2, 5, 1, 4],
                      [3, 3, 2, 2, 9],
                      [2, 6, 1, 4, 0]], 9],
            "answer": 46
        },
        {
            "input":[[[5, 6, 4, 3, 4],
                      [2, 4, 9, 5, 3],
                      [8, 2, 5, 7, 9],
                      [3, 3, 2, 2, 6],
                      [2, 6, 0, 4, 1]], 5],
            "answer": 17
        }
    ],
    "Extra": [
        {
            "input":[[[1, 2, 3, 4, 5],
                      [2, 3, 4, 5, 1],
                      [3, 4, 5, 1, 2],
                      [4, 5, 1, 2, 3],
                      [5, 1, 2, 3, 4]], 25],
            "answer": 75
        },
        {
            "input":[[[2, 5, 4, 1, 8],
                      [0, 4, 9, 5, 3],
                      [7, 2, 5, 1, 4],
                      [3, 3, 2, 2, 9],
                      [2, 6, 1, 4, 1]], 6],
            "answer": 27
        },
        {
            "input":[[[2, 5, 1, 2, 4],
                      [0, 4, 9, 5, 3],
                      [7, 4, 1, 1, 4],
                      [3, 3, 2, 2, 9],
                      [2, 6, 1, 4, 3]], 7],
            "answer": 37
        },
        {
            "input":[[[1, 6],
                      [5, 1]], 2],
            "answer": 2
        },
        {
            "input":[[[0, 9],
                      [8, 1]], 3],
            "answer": 10
        },
        {
            "input":[[[4, 5, 1],
                      [0, 6, 9],
                      [3, 2, 1]], 4],
            "answer": 20
        },
        {
            "input":[[[1, 5, 8],
                      [7, 1, 9],
                      [3, 2, 1]], 3],
            "answer": 3
        },
        {
            "input":[[[4, 5, 1, 2],
                      [0, 6, 9, 3],
                      [4, 7, 1, 5],
                      [3, 2, 3, 9]], 6],
            "answer": 40
        }
    ]
}
