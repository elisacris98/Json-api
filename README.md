# Json-api
 # My Hero Academia API

## Description

This API provides information about My Hero Academia characters, including their names, quirks, and hero names. It allows you to perform various operations such as retrieving character details, adding new characters, updating existing character information, and deleting characters.

## Endpoints

### Get All Characters

- **Endpoint**: `/api/hero`
- **HTTP Verb**: `GET`
- **Description**: Retrieve a list of all My Hero Academia characters.

### Get Character by ID

- **Endpoint**: `/api/hero/:id`
- **HTTP Verb**: `GET`
- **Description**: Retrieve a specific character's details by their ID.

### Add a New Character

- **Endpoint**: `/api/hero`
- **HTTP Verb**: `POST`
- **Description**: Add a new character to the database.

### Update Character Information

- **Endpoint**: `/api/characters/:id`
- **HTTP Verb**: `PUT`
- **Description**: Update an existing character's information.

### Delete a Character

- **Endpoint**: `/api/hero/:id`
- **HTTP Verb**: `DELETE`
- **Description**: Delete a character from the database.

### Filter Characters by Quirk

- **Endpoint**: `/api/hero/filter-by-quirk/:quirk`
- **HTTP Verb**: `GET`
- **Description**: Filter characters by their quirk.

## Data Structure

The data provided by this API is structured as JSON objects and follows this format:

```json
{
  "characters": [
    {
      "id": 1,
      "name": "Character Name",
      "quirks": "Character's Quirk",
      "heroName": "Character's Hero Name"
    },
    // Add more characters here...
  ]
}
