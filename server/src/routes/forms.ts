import express from 'express';
import { FormEntry } from '../models/FormEntry';

const router = express.Router();

// Route to submit a new form entry
router.post('/submit', async (req, res) => {
    try {
        const formEntry = new FormEntry(req.body);
        await formEntry.save();
        res.status(201).json({ message: 'Form entry submitted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error submitting form entry' });
    }
});

// Route to get all form entries
router.get('/', async (req, res) => {
    try {
        const entries = await FormEntry.find();
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving form entries' });
    }
});

// Route to compare two form entries
router.get('/compare/:id1/:id2', async (req, res) => {
    try {
        const { id1, id2 } = req.params;
        const entry1 = await FormEntry.findById(id1);
        const entry2 = await FormEntry.findById(id2);
        if (!entry1 || !entry2) {
            return res.status(404).json({ error: 'One or both entries not found' });
        }
        res.status(200).json({ entry1, entry2 });
    } catch (error) {
        res.status(500).json({ error: 'Error comparing form entries' });
    }
});

export default router;