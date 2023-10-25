'use client';
import { useState, ChangeEvent } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { twMerge } from 'tailwind-merge';
import { RefreshCw } from 'lucide-react';
export default function Form() {
  const [passwordLength, setPasswordLength] = useState<number>(5);
  const [generatedPassword, setgeneratedPassword] = useState<string>('Select checkbox!');
  const [useUpperCase, setuseUpperCase] = useState(false);
  const [useLowerCase, setuseLowerCase] = useState(false);
  const [useNumbers, setuseNumbers] = useState(false);
  const [useCharacters, setuseCharacters] = useState(false);

  type PasswordStrength = 'weak' | 'medium' | 'strong';
  let passwordStrength: PasswordStrength = 'weak';
  if (passwordLength < 6) {
    passwordStrength = 'weak';
  } else if (passwordLength >= 6 && passwordLength <= 9) {
    passwordStrength = 'medium';
  } else {
    passwordStrength = 'strong';
  }

  function handleLowerCase() {
    setuseLowerCase(!useLowerCase);
  }

  function handleUpperCase() {
    setuseUpperCase(!useUpperCase);
  }
  function handleNumbers() {
    setuseNumbers(!useNumbers);
  }
  function handleCharacters() {
    setuseCharacters(!useCharacters);
  }

  function generatePassword(e: any) {
    e.preventDefault();
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '123456789';
    const characters = '@#$&';
    const allChars =
      (useUpperCase ? uppercaseChars : '') +
      (useLowerCase ? lowercaseChars : '') +
      (useNumbers ? numbers : '') +
      (useCharacters ? characters : '');

    if (allChars.length === 0) {
      setgeneratedPassword('Select checkbox!');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const index = Math.floor(Math.random() * allChars.length);
      newPassword += allChars[index];
    }
    setgeneratedPassword(newPassword);
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setPasswordLength(Number(newValue));
  }

  return (
    <form onSubmit={generatePassword} className='flex flex-col'>
      <div className='flex'>
        <div className='w-full h-full flex items-center justify-between'>
          <Input
            className={twMerge('bg-slate-700 text-slate-100 font-semibold text-xs md:text-sm')}
            value={generatedPassword}
            onChange={generatePassword}
          />
          <button type='submit' className='px-4'>
            <RefreshCw size={20} />
          </button>
        </div>
      </div>
      <Label className={twMerge('text-[10px] flex lowercase ')}>{passwordStrength}</Label>
      <Label className={twMerge('text-xs mt-5')}>
        Password Length : {passwordLength}
        <Input type='range' min={4} max={12} value={passwordLength} onChange={handleInputChange} />
      </Label>
      <section className='flex flex-col gap-2'>
        <Label className='flex justify-between text-xs'>
          Uppercase
          <input
            type='checkbox'
            checked={useUpperCase}
            onChange={handleUpperCase}
            className='align-middle cursor-pointer'
          />
        </Label>
        <Label className='flex justify-between text-xs'>
          Lowercase
          <input
            type='checkbox'
            checked={useLowerCase}
            onChange={handleLowerCase}
            className='align-middle cursor-pointer'
          />
        </Label>
        <Label className='flex justify-between text-xs'>
          Numbers
          <input
            type='checkbox'
            checked={useNumbers}
            onChange={handleNumbers}
            className='align-middle cursor-pointer'
          />
        </Label>
        <Label className='flex justify-between text-xs'>
          Special Chars
          <input
            type='checkbox'
            checked={useCharacters}
            onChange={handleCharacters}
            className='align-middle cursor-pointer'
          />
        </Label>
      </section>
    </form>
  );
}
