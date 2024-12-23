﻿using AtendoCloudSystem.Tables;
using System;
using System.ComponentModel.DataAnnotations;

namespace AtendoCloudSystem.Tables.Dto
{
    public class CreateTableInput
    {
        [Required]
        public string Numero { get; set; }

        public string Description { get; set; }

        public string Status { get; set; }
    }
}