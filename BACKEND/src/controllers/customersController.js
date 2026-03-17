import Customer from "../models/customer.js";

export const getAllCustomers = async(req, res) => {
    try{
        const customer = await Customer.find()
        res.status(200).json(customer)
    }catch(error){
        console.error("Error in the getAllCustomers controller", error);
        res.status(500).json({message:"internal server error"});
    }
};

export const createCustomer = async(req, res) => {
    try{
        const {firstName, lastName, email, phone, ageLimit, artist, gender, agreedToTerms} = req.body
        
        // Handle possible typos (
        const requestBody = req.body;
        
        // Normalize data 
        const customerData = {
            firstName,
            lastName,
            email: email?.toLowerCase().trim(),
            phone: phone?.trim(),
            // Check for both camelCase and lowercase versions
            ageLimit: (requestBody.ageLimit || requestBody.agelimit)?.toLowerCase(),
            artist,
            gender: gender?.toLowerCase(),
            agreedToTerms: agreedToTerms === 'yes' || agreedToTerms === true || agreedToTerms === 'true'
        };

        // Validate required fields
        if (!customerData.ageLimit) {
            return res.status(400).json({ 
                success: false, 
                message: 'ageLimit is required and must be either "yes" or "no"' 
            });
        }

        // Validate ageLimit
        if (!['yes', 'no'].includes(customerData.ageLimit)) {
            return res.status(400).json({ 
                success: false, 
                message: 'ageLimit must be either "yes" or "no"' 
            });
        }

        // Validate gender if provided
        if (customerData.gender && !['male', 'female', 'other', 'prefer not to say'].includes(customerData.gender)) {
            return res.status(400).json({ 
                success: false, 
                message: 'gender must be one of: male, female, non-binary, prefer not to say' 
            });
        }

        const customer = new Customer(customerData)
        const savedCustomer = await customer.save()
        
        res.status(201).json({ 
            success: true, 
            data: savedCustomer,
            message: 'Booking created successfully'
        });
    }catch(error){
        console.error("Error in the createCustomer controller", error);
        
        // Handle duplicate key errors
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            return res.status(400).json({ 
                success: false, 
                message: `A customer with this ${field} already exists` 
            });
        }
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ 
                success: false, 
                message: messages.join(', ') 
            });
        }
        
        res.status(500).json({message:"internal server error"});
    }
};

export const updateCustomer = async(req, res) => {
    res.status(201).send("A single customer's data has been updated succesully!");
};

export const deleteCustomer = async(req, res) => {
    res.status(201).send("A single customer's data has been deleted succesully!");
};