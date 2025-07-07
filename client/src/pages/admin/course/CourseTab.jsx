import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RichTextEditor from "@/components/ui/RichTextEditor";
import React, { useState } from "react";

const CourseTab = () => {
    const [input, setInput] = useState({
    courseTitle: "",
    subTitle: "",
    description: "",
    category: "",
    courseLevel: "",
    coursePrice: "",
    courseThumbnail: "",
  });

  const changeEventHandler = (e) => {
    const{name, value} = e.target;
    setInput({...input, [name]:value});
  }

  const isPublished = false;
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center w-full">
          <div className="max-w-[70%]">
            <CardTitle>Basic Course Info</CardTitle>
            <CardDescription>
              Make changes to your courses here and click save when you are done
            </CardDescription>
          </div>

          <div className="space-x-2">
            <Button variant="outline">
              {isPublished ? "Unpublished" : "Publish"}
            </Button>
            <Button>Remove Course</Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
          
          <div>
            <Label>Title</Label>
            <Input
              type="text"
              name="courseTitle"
              value={input.courseTitle}
              onChange={changeEventHandler}
              placeholder="Ex. Fullstack developer"
            />
           
          </div>
          <div>
            <Label>Subtitle</Label>
            <Input
              type="text"
              name="subTitle"
              value={input.subTitle}
              onChange={changeEventHandler}
              placeholder="Ex. Become a Fullstack developer from zero to hero in 2 months"
            />
          </div>
          <div>
            <Label>Description</Label>
            <RichTextEditor input={input} setInput={setInput} />
          </div>
      </CardContent>
    </Card>
  );
};

export default CourseTab;
