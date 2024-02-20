import { connect } from "@/dbConfig/dbConfig";
import Sponsor from "@/models/sponsorModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {firstName, lastName, positionInCompany, contactEmail, contactNumber, companyName, sponsorType, query} = reqBody;

        const newSponsor = new Sponsor({
            firstName:firstName,
            lastName:lastName,
            positionInCompany:positionInCompany,
            contactEmail:contactEmail,
            contactNumber:contactNumber,
            companyName:companyName,
            sponsorType:sponsorType,
            query:query
        });

        const savedSponsor = await newSponsor.save();

        console.log(savedSponsor);

        return NextResponse.json({message:"New Sponsor Query Created successfully", success:true});

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

