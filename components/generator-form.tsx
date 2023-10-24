'use client';
import { useState, useEffect } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { twMerge } from 'tailwind-merge';

export default function Form() {
  const [passwordLength, setPasswordLength] = useState(5);
  const [generatedPassword, setgeneratedPassword] = useState<string>('');
  const [passwordStrength, setpasswordStrength] = useState<PasswordStrength>('weak');
  type PasswordStrength = 'weak' | 'medium' | 'strong';

  useEffect(() => {
    if (passwordLength < 6) {
      setpasswordStrength('weak');
    } else if (passwordLength >= 6 && passwordLength <= 9) {
      setpasswordStrength('medium');
    } else {
      setpasswordStrength('strong');
    }
  }, [passwordLength]);

  function generateLetter() {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter = Math.floor(Math.random() * alphabet.length);
    return alphabet[letter];
  }
  function generateLetters() {
    let lettersArray = [];
    for (let i = 0; i < passwordLength; i++) {
      lettersArray.push(generateLetter());
    }
    let letters = lettersArray.join('');
    return letters;
  }

  function generate(e: any) {
    e.preventDefault();
    setgeneratedPassword(e.target.value);
    setgeneratedPassword(password);
  }

  function handleInputChange(e: any) {
    const newValue = e.target.value;
    setPasswordLength(Number(newValue));
  }

  const password = generateLetters();

  return (
    <form onSubmit={generate} className='flex flex-col'>
      <div className='flex'>
        <Input value={generatedPassword} onChange={generate} />
        <Button type='submit' size='sm'>
          Generate
        </Button>
      </div>
      <Label className={twMerge('text-[10px] flex lowercase')}>{passwordStrength}</Label>
      <Label className={twMerge('text-xs mt-5')}>
        Password Length : {passwordLength}
        <Input type='range' min={4} max={12} value={passwordLength} onChange={handleInputChange} />
      </Label>
      <section className='flex flex-col gap-2'>
        <Label className='flex justify-between text-xs'>
          Uppercase
          <Checkbox className='align-middle' />
        </Label>
        <Label className='flex justify-between text-xs'>
          Lowercase
          <Checkbox className='align-middle' />
        </Label>
        <Label className='flex justify-between text-xs'>
          Numbers
          <Checkbox className='align-middle ' />
        </Label>
      </section>
    </form>
  );
}
