const request = require('supertest');
const app = require('../app');

describe('POST /comment', () => {
    let mockDatabase;
    let testApp;

    beforeEach(() => {
        mockDatabase = {
            createComment: jest.fn(),
        };
        testApp = app(mockDatabase);
    });

    it('should respond with 400 for missing fields', async () => {
        const response = await request(testApp)
            .post('/comment')
            .send({});
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({
            status: 'error',
            message: 'Required fields are missing',
        });
    });

    it('should respond with 201 for successful comment creation', async () => {
        const mockId = 1;
        mockDatabase.createComment.mockResolvedValue(mockId);
        const response = await request(testApp)
            .post('/comment')
            .send({ name: 'Test Name', comment: 'Test Comment' });
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual({
            status: 'success',
            data: {
                msg: `Comment with id ${mockId} was created`,
                id: mockId,
            },
        });
    });

    it('should respond with 500 for database error', async () => {
        mockDatabase.createComment.mockRejectedValue(new Error('Database error'));
        const response = await request(testApp)
            .post('/comment')
            .send({ name: 'Test Name', comment: 'Test Comment' });
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({
            status: 'error',
            message: 'Database operation failed',
        });
    });
});

describe('GET /comments', () =>{
    let mockDatabase;
    let testApp;
    let mockData;
    beforeEach(() =>{
        mockDatabase = {
            getComments: jest.fn()
        }
        testApp = app(mockDatabase)

        mockData = [
            {
                "id": 2,
                "name": "bingy",
                "description": "Test bingy",
                "createdAt": "2023-06-14T23:14:09.000Z"
            },
            {
                "id": 1,
                "name": "thingy",
                "description": "Test tingy",
                "createdAt": "2023-06-14T23:14:01.000Z"
            }
        ]
    })

    it('should respond with 200 and array of data', async () => {
        mockDatabase.getComments.mockResolvedValue(mockData) //no semicollon
        const response = await request(testApp)
            .get("/comment")
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(mockData)
    })

    it('should respond with 500 for database error', async () =>{
        mockDatabase.getComments.mockRejectedValue(new Error('Database error'))
        const response = await request(testApp)
            .get("/comment")
        expect(response.statusCode).toBe(500)
        expect(response.body).toEqual({
            status: 'error',
            message: 'Database operation failed'
        })
    })
})
