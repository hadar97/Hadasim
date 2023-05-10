using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace DAL.models
{
    public partial class Mycontext : DbContext
    {
        public Mycontext()
        {
        }

        public Mycontext(DbContextOptions<Mycontext> options)
            : base(options)
        {
        }

        public virtual DbSet<CovidDetail> CovidDetails { get; set; }
        public virtual DbSet<Worker> Workers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer(" Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=C:\\Users\\User\\Desktop\\My_project\\MyDatabase.mdf;Integrated Security=True;Connect Timeout=30");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<CovidDetail>(entity =>
            {
                entity.HasKey(e => e.IdCovidDetails)
                    .HasName("PK__covidDet__CD59D0C1A81EAFB0");

                entity.ToTable("covidDetails");

                entity.Property(e => e.DateOfPositiveStart)
                    .HasColumnType("date")
                    .HasColumnName("dateOfPositiveStart");

                entity.Property(e => e.DateOfRecovery)
                    .HasColumnType("date")
                    .HasColumnName("dateOfRecovery");

                entity.Property(e => e.DateOfSingleVaccine)
                    .HasColumnType("date")
                    .HasColumnName("dateOfSingleVaccine");

                entity.Property(e => e.ProducerOfVaccine)
                    .HasMaxLength(50)
                    .HasColumnName("producerOfVaccine");

                entity.Property(e => e.WorkerId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("workerId");

                entity.HasOne(d => d.Worker)
                    .WithMany(p => p.CovidDetails)
                    .HasForeignKey(d => d.WorkerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__covidDeta__worke__36B12243");
            });

            modelBuilder.Entity<Worker>(entity =>
            {
                entity.HasKey(e => e.IdWorker)
                    .HasName("PK__tmp_ms_x__F683FAE0AA4A71DF");

                entity.ToTable("workers");

                entity.Property(e => e.IdWorker)
                    .HasMaxLength(50)
                    .HasColumnName("idWorker");

                entity.Property(e => e.BirthDate)
                    .HasColumnType("date")
                    .HasColumnName("birthDate");

                entity.Property(e => e.Cellphone)
                    .HasMaxLength(50)
                    .HasColumnName("cellphone");

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .HasColumnName("city");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .HasColumnName("firstName");

                entity.Property(e => e.HomeNumber)
                    .HasMaxLength(50)
                    .HasColumnName("homeNumber");

                entity.Property(e => e.ImgPath)
                    .HasMaxLength(50)
                    .HasColumnName("imgPath");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .HasColumnName("lastName");

                entity.Property(e => e.Street)
                    .HasMaxLength(50)
                    .HasColumnName("street");

                entity.Property(e => e.Tellephon)
                    .HasMaxLength(50)
                    .HasColumnName("tellephon");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
