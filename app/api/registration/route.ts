import { connect } from "@/dbConfig/dbConfig";
import Registration from "@/models/registrationModel"
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const{firstName, lastName, collegeName, collegeYear, email, contactNumber,githubUsername} = reqBody;

        const newRegistration = new Registration({
            firstName:firstName,
            lastName:lastName,
            collegeName:collegeName,
            collegeYear:collegeYear,
            email:email,
            contactNumber:contactNumber,
            githubUsername:githubUsername
        });

        const savedRegistration = await newRegistration.save();

        console.log(savedRegistration);

        return NextResponse.json({message:"New Registration successfully", success:true});

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}