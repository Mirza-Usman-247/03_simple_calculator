"use client";
import React from "react";
import { useState, ChangeEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [isResult, setResult] = useState("");

  const handleNum1Change = (e: ChangeEvent<HTMLInputElement>) => {
    setNum1(e.target.value);
  };
  const handleNum2Change = (e: ChangeEvent<HTMLInputElement>) => {
    setNum2(e.target.value);
  };
  const Add = () => {
    setResult((parseFloat(num1) - parseFloat(num2)).toString());
  };
  const Subtarct = () => {
    setResult((parseFloat(num1) - parseFloat(num2)).toString());
  };
  const Multiply = () => {
    setResult((parseFloat(num1) * parseFloat(num2)).toString());
  };
  const Divide = (): void => {
    setResult((parseFloat(num1) / parseFloat(num2)).toString());
  };
  const Clear = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };
  return (
    <div>
      <Card className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Simple Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Input fields for numbers */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="num1">Number 1</Label>
              <Input
                id="num1"
                type="number"
                value={num1}
                onChange={handleNum1Change}
                placeholder="Enter a number"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="num2">Number 2</Label>
              <Input
                id="num2"
                type="number"
                value={num2}
                onChange={handleNum2Change}
                placeholder="Enter a number"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-700 dark:text-gray-300"
              onClick={Add}
            >
              +
            </Button>
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-700 dark:text-gray-300"
              onClick={Subtarct}
            >
              -
            </Button>
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-700 dark:text-gray-300"
              onClick={Multiply}
            >
              *
            </Button>
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-700 dark:text-gray-300"
              onClick={Divide}
            >
              /
            </Button>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="result">Result</Label>
            <Input
              id="result"
              type="text"
              value={isResult}
              placeholder="Result"
              readOnly
            />
          </div>
          <Button variant="outline" className="w-full" onClick={Clear}>
            Clear
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calculator;
