/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
let journalFromAPI = [];

// const journal = [
// 	{
// 		id: 1,
// 		date: '07/24/2025',
// 		concept: 'HTML & CSS',
// 		entry:
// 			'We talked about HTML components and how to make grid layouts with Flexbox in CSS.',
// 		mood: 'Ok',
// 	},
// 	{
// 		id: 2,
// 		date: '07/26/2025',
// 		concept: 'HTML & JS',
// 		entry:
// 			'We talked about using javascript to automate making some html elements. Very uncomfortable with the concepts',
// 		mood: 'Stressed',
// 	},
// 	{
// 		id: 3,
// 		date: '07/27/2025',
// 		concept: 'JS & Lab time',
// 		entry:
// 			'Worked on the Journal to style it the way that I wanted, and then went and did some of the journal styling.',
// 		mood: 'Stressed',
// 	},
// ];

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
	const sortedByDate = journal.sort(
		(currentEntry, nextEntry) =>
			Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
	);
	return sortedByDate;
};

// Here we are going to create a getEntries function to get the entries off a local JSON server.

export const getEntries = () => {
	return fetch('http://localhost:8088/entries?_expand=mood')
		.then((Response) => Response.json())
		.then((parsedEntries) => {
			console.table(parsedEntries);
			journalFromAPI = parsedEntries;
		})
		.then((_) => {
			console.log('this should be an array of objects', journalFromAPI);
		});
};

export const useEntries = () => journalFromAPI.slice();

export const saveEntries = (entry) => {
	return fetch('http://localhost:8088/entries', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(entry),
	});
	// .then we want to update our aside bar
	// .then dispatch an event that says we need to re-render the aside
};
