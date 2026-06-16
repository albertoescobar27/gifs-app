import {  describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react";

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

          //mandamos a llamar el handleAdd (el proceso para incrementar el contador)
          //en teoria incrementa en 1 el valor inicial del contador que es 10, por lo tanto el resultado esperado es 11
          act(()=>{
               result.current.handleAdd()
          })

          act(()=>{
               result.current.handleAdd()
          })

          //esperamos que el valor del contador sea 12, ya que se llama dos veces a handleAdd
          expect(result.current.counter).toBe(12)    
     })

     test('should decrement counter when handleSubtact is called', ()=>{
          const {result} = renderHook(()=> useCounter())

          act(()=>{
          result.current.handleSubtract()
          })

          expect(result.current.counter).toBe(9)

     })

     test('should reset counter when handleReset is called', ()=>{
          const {result} = renderHook(()=> useCounter())

          act(()=>{
               result.current.handleSubtract()
               result.current.handleSubtract()
               result.current.handleSubtract()
               result.current.handleSubtract()
               result.current.handleSubtract()
          })

          // console.log(result.current.counter)
          expect(result.current.counter).toBe(5)

          act(()=>{
               result.current.handleReset()
          })

          expect(result.current.counter).toBe(10)
     })
})