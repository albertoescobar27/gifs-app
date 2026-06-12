import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { renderHook } from "@testing-library/react";

describe('useCounter', () => {
     //nuestra primera prueba
     test('should initialize with default values', () => {
          const {result} = renderHook(()=> useCounter()) 

          //esperamos que el valor inicial del hook sea un 10
          expect(result.current.counter).toBe(10)
     })

     test('should initialize with value 20', ()=>{

          const initialValue = 20;

          const {result} = renderHook(()=>useCounter(initialValue))

          expect(result.current.counter).toBe(initialValue)
     })

     test('should incement counter when handleAdd is called', ()=>{
          const {result} = renderHook(()=> useCounter()) 

          //mandamos a llamar el handleAdd
          result.current.handleAdd()

                    
     })
})