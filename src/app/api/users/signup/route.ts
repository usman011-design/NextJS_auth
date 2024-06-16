import { NextResponse, NextRequest } from "next/server";
import  User  from "@/models/userModel";

import { connect } from "@/dbConfig/dbConfig";
import bcryptjs from "bcryptjs";

connect();

// post the user to the server for sing up
export async function POST(request: NextRequest) {
  try {
    const newRequest = await request.json();

    const { username, email, password } = newRequest;

    //check user if exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "user already exists" },
        { status: 400 }
      );
    }

    //hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // new user create
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const saveUser = await newUser.save();

    return NextResponse.json({
      message: "user registered successfully",
      success: true,
      saveUser,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
