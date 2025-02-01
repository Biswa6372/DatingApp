using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
    [Required]
    public required string UserName { get; set;}
    [Required]
    public required string Password { get; set; }
}
